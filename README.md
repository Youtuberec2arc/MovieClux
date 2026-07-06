# Adrinolinks Shortener - Usage

Steps:
1. Put `shorten-links.js` in your repository root.
2. Add `.gitignore` lines (see provided .gitignore).
3. Set your token (do NOT commit it):
   - Linux/macOS:
     export ADRINO_API_TOKEN=your_token_here
   - Windows PowerShell:
     $env:ADRINO_API_TOKEN="your_token_here"
4. Dry-run to see changes (no files modified):
   node shorten-links.js
5. If results look correct, apply changes (will create backups file.bak):
   ADRINO_API_TOKEN=your_token_here node shorten-links.js --apply

Important:
- If your site is served from a build or deployed platform, you'll need to redeploy after changing files.
- If your download links are generated at runtime (client-side JS building URLs) this script may not catch them; provide a sample and I can adapt.
- Never commit your API token. If accidentally committed, rotate the token immediately.
