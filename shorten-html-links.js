#!/usr/bin/env node
/**
 * Usage:
 *   ADRINO_API_TOKEN=bcf6f322937134bd31b5724f6296554707240da8 node shorten-html-links.js --apply
 *   ADRINO_API_TOKEN=... node shorten-html-links.js        (dry-run, prints changes)
 *
 * This script:
 *  - Recursively scans the current directory for .html files
 *  - Finds href/src URLs
 *  - Calls Adrinolinks API to shorten each unique URL (skips adrinolinks.in host)
 *  - Replaces URLs in files, writing backups (file.html.bak)
 *
 * Note: Keep API token secret. Use environment variable ADRINO_API_TOKEN.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const API_HOST = 'https://adrinolinks.in';
const TOKEN = process.env.ADRINO_API_TOKEN;
const APPLY = process.argv.includes('--apply');

if (!TOKEN) {
  console.error('Error: set ADRINO_API_TOKEN environment variable (e.g. export ADRINO_API_TOKEN=...)');
  process.exit(1);
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const res = path.resolve(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name.startsWith('.git')) continue;
      files.push(...await walk(res));
    } else if (e.isFile() && res.endsWith('.html')) {
      files.push(res);
    }
  }
  return files;
}

async function shortenUrl(longUrl) {
  // Skip if it's already adrinolinks
  try {
    const u = new URL(longUrl);
    if (u.hostname.includes('adrinolinks.in')) return longUrl;
  } catch (err) {
    return longUrl; // malformed -> skip
  }

  const apiUrl = `${API_HOST}/api?api=${encodeURIComponent(TOKEN)}&url=${encodeURIComponent(longUrl)}&format=text`;
  try {
    const res = await fetch(apiUrl, { method: 'GET' });
    if (!res.ok) {
      console.warn(`API returned ${res.status} for ${longUrl}`);
      return longUrl;
    }
    const text = (await res.text()).trim();
    if (!text) {
      console.warn(`Empty response while shortening ${longUrl}`);
      return longUrl;
    }
    return text;
  } catch (err) {
    console.warn(`Error calling API for ${longUrl}: ${err.message}`);
    return longUrl;
  }
}

function findUrlsInHtml(content) {
  // Find href="..." and src="..." and url(...) CSS patterns
  const regex = /(href|src)\s*=\s*(['"])(https?:\/\/[^'"]+)\2/ig;
  const matches = [];
  for (const m of content.matchAll(regex)) {
    matches.push({ full: m[0], attr: m[1], quote: m[2], url: m[3] });
  }
  // also CSS url(...) occurrences
  const cssRegex = /url\(\s*(['"]?)(https?:\/\/[^'")]+)\1\s*\)/ig;
  for (const m of content.matchAll(cssRegex)) {
    matches.push({ full: m[0], css: true, quote: m[1] || '"', url: m[2] });
  }
  return matches;
}

async function processFile(filePath, cache) {
  let content = await fs.readFile(filePath, 'utf8');
  const found = findUrlsInHtml(content);
  if (found.length === 0) return null;

  let modified = false;
  for (const f of found) {
    const longUrl = f.url;
    if (cache[longUrl]) {
      // known mapping
      if (cache[longUrl] !== longUrl) {
        content = content.split(longUrl).join(cache[longUrl]);
        modified = true;
      }
      continue;
    }
    // Shorten synchronously to control rate
    const shortUrl = await shortenUrl(longUrl);
    cache[longUrl] = shortUrl;
    if (shortUrl !== longUrl) {
      content = content.split(longUrl).join(shortUrl);
      modified = true;
      console.log(`[REPLACE] ${longUrl} -> ${shortUrl}`);
    } else {
      console.log(`[SKIP]  ${longUrl}`);
    }
  }

  if (modified) {
    if (APPLY) {
      // backup and write
      await fs.copyFile(filePath, `${filePath}.bak`);
      await fs.writeFile(filePath, content, 'utf8');
      return { file: filePath, changed: true };
    } else {
      return { file: filePath, changed: true };
    }
  }
  return null;
}

(async () => {
  const start = process.cwd();
  console.log(`Scanning HTML files in ${start} ...`);
  const files = await walk(start);
  console.log(`Found ${files.length} .html files.`);

  const cache = {}; // map longUrl -> shortUrl
  const results = [];
  for (const f of files) {
    const r = await processFile(f, cache);
    if (r) results.push(r);
  }

  console.log('Done.');
  if (!APPLY) {
    console.log('Run with --apply to write changes to files (backups will be saved as file.html.bak).');
  } else {
    console.log('Backups created for modified files with extension .bak');
  }
})();