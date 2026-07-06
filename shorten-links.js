#!/usr/bin/env node
/**
 * shorten-links.js
 *
 * Usage:
 *   ADRINO_API_TOKEN=your_token node shorten-links.js        (dry-run)
 *   ADRINO_API_TOKEN=your_token node shorten-links.js --apply
 *
 * What it does:
 *  - Recursively scans current directory for .html, .htm, .js, .php files
 *  - Finds http(s) URLs in href/src attributes, CSS url(...), and JS string literals
 *  - Calls Adrinolinks API to shorten each unique URL (skips adrinolinks.in)
 *  - Caches results in .shorten-cache.json to avoid repeat API calls
 *  - In --apply mode: creates backups file.ext.bak and writes replaced files
 *
 * Safety:
 *  - Do NOT hardcode the API token. Use ADRINO_API_TOKEN env var.
 *  - .shorten-cache.json and backups are ignored by .gitignore below.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const TOKEN = process.env.ADRINO_API_TOKEN;
const APPLY = process.argv.includes('--apply');
const ROOT = process.cwd();
const CACHE_FILE = path.join(ROOT, '.shorten-cache.json');
const LOG_FILE = path.join(ROOT, 'shorten.log');
const API_HOST = 'adrinolinks.in';

if (!TOKEN) {
  console.error('Error: set ADRINO_API_TOKEN environment variable before running.');
  process.exit(1);
}

function log(...args) {
  const line = `[${new Date().toISOString()}] ${args.join(' ')}`;
  console.log(line);
  try { fs.appendFileSync(LOG_FILE, line + '\n'); } catch (e) {}
}

function readCache() {
  try {
    const s = fs.readFileSync(CACHE_FILE, 'utf8');
    return JSON.parse(s || '{}');
  } catch (e) {
    return {};
  }
}
function writeCache(cache) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
  } catch (e) {
    log('Warning: could not write cache', e.message);
  }
}

function httpGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, body: data });
      });
    }).on('error', (err) => reject(err));
  });
}

async function shortenUrl(longUrl) {
  try {
    const u = new URL(longUrl);
    if (u.hostname && u.hostname.includes(API_HOST)) {
      return longUrl; // already adrinolinks
    }
  } catch (e) {
    return longUrl; // malformed URL -> skip
  }

  const apiUrl = `https://${API_HOST}/api?api=${encodeURIComponent(TOKEN)}&url=${encodeURIComponent(longUrl)}&format=text`;

  try {
    const res = await httpGet(apiUrl);
    if (res.status !== 200) {
      log(`API HTTP ${res.status} for ${longUrl} - response: ${res.body.substring(0,200)}`);
      return longUrl;
    }
    const body = (res.body || '').trim();
    if (!body) {
      log(`Empty API response for ${longUrl}`);
      return longUrl;
    }
    // If API returned JSON disguised as text, try parse
    if (body[0] === '{') {
      try {
        const j = JSON.parse(body);
        if (j.status === 'success' && j.shortenedUrl) {
          return j.shortenedUrl;
        } else {
          log(`API JSON error for ${longUrl}: ${JSON.stringify(j).substring(0,200)}`);
          return longUrl;
        }
      } catch (e) {
        // fallback to raw
      }
    }
    // Otherwise expect a plain short URL
    if (body.startsWith('http')) return body;
    // fallback to original if format unexpected
    log(`Unexpected API body for ${longUrl}: ${body.substring(0,200)}`);
    return longUrl;
  } catch (err) {
    log(`Fetch error for ${longUrl}: ${err.message}`);
    return longUrl;
  }
}

async function walkDir(dir, exts) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const name = e.name;
    if (name === 'node_modules' || name.startsWith('.git')) continue;
    const full = path.join(dir, name);
    if (e.isDirectory()) {
      results = results.concat(await walkDir(full, exts));
    } else if (e.isFile()) {
      if (exts.includes(path.extname(name).toLowerCase())) results.push(full);
    }
  }
  return results;
}

function findUrls(content) {
  const found = new Set();
  // href/src attributes: href="https://..."
  const attrRegex = /(href|src)\s*=\s*(['\"])(https?:\/\/[^'\"]+)\2/ig;
  for (const m of content.matchAll(attrRegex)) found.add(m[3]);
  // CSS url(...)
  const cssRegex = /url\(\s*(['\"]?)(https?:\/\/[^'\")]+)\1\s*\)/ig;
  for (const m of content.matchAll(cssRegex)) found.add(m[2]);
  // JS string literals starting with http(s) - "https://..." or '...' or `...`
  const jsRegex = /(['\"`])(https?:\/\/[^'"`]+)\1/g;
  for (const m of content.matchAll(jsRegex)) found.add(m[2]);
  return Array.from(found);
}

async function processFile(filePath, cache) {
  const content = fs.readFileSync(filePath, 'utf8');
  const urls = findUrls(content);
  if (urls.length === 0) return null;

  let modified = false;
  let updatedContent = content;
  for (const longUrl of urls) {
    try {
      const parsed = new URL(longUrl);
      if (parsed.hostname.includes(API_HOST)) continue; // skip adrinolinks
    } catch (e) {
      continue;
    }
    let short = cache[longUrl];
    if (!short) {
      log(`Shortening: ${longUrl}`);
      short = await shortenUrl(longUrl);
      cache[longUrl] = short;
      writeCache(cache);
    } else {
      log(`Cache hit: ${longUrl} -> ${short}`);
    }
    if (short && short !== longUrl) {
      // Replace exact occurrences (simple but effective). Use split/join to avoid regex escaping.
      if (updatedContent.includes(longUrl)) {
        updatedContent = updatedContent.split(longUrl).join(short);
        modified = true;
        log(`Replaced in ${filePath}: ${longUrl} -> ${short}`);
      }
    }
  }

  if (modified) {
    if (APPLY) {
      // backup and write
      try {
        fs.copyFileSync(filePath, `${filePath}.bak`);
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        return { file: filePath, changed: true };
      } catch (e) {
        log(`Error writing file ${filePath}: ${e.message}`);
        return null;
      }
    } else {
      return { file: filePath, changed: true };
    }
  }
  return null;
}

(async () => {
  log(`Starting ${APPLY ? 'apply' : 'dry-run'} at ${ROOT}`);
  const exts = ['.html', '.htm', '.js', '.php'];
  const files = await walkDir(ROOT, exts);
  log(`Found ${files.length} candidate files (${exts.join(',')})`);

  const cache = readCache();
  const results = [];
  for (const f of files) {
    try {
      const res = await processFile(f, cache);
      if (res) results.push(res);
    } catch (e) {
      log(`Error processing ${f}: ${e.message}`);
    }
  }

  log(`Done. Files changed: ${results.length}`);
  if (!APPLY) {
    log('Dry-run finished. Rerun with --apply to write changes (backups .bak will be created).');
  } else {
    log('Apply finished. Backups saved with .bak extension. Cache saved in .shorten-cache.json');
  }
})();
