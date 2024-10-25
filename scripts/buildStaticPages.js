import { execSync } from 'child_process';

// Run the Markdown-to-HTML conversion
execSync('node ./scripts/generateSite.js', { stdio: 'inherit' });

// Run the script to update the pages.json file
execSync('node ./scripts/generatePagesJson.js', { stdio: 'inherit' });

console.log('Static pages build process complete.');
