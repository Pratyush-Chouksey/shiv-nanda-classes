import fs from 'fs';
import path from 'path';

function findInDir(dir, filter, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('dist')) continue;
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findInDir(fullPath, filter, fileList);
    } else if (filter.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const srcFiles = findInDir('./src', /\.(js|jsx)$/);
const links = {
  tel: new Set(),
  whatsapp: new Set(),
  mailto: new Set(),
  maps: new Set(),
  instagram: new Set(),
  facebook: new Set(),
  youtube: new Set()
};

for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  (content.match(/tel:[^"'\s`]+/g) || []).forEach(l => links.tel.add(l));
  (content.match(/https?:\/\/(wa\.me|api\.whatsapp\.com)[^"'\s`]+/g) || []).forEach(l => links.whatsapp.add(l));
  (content.match(/mailto:[^"'\s`]+/g) || []).forEach(l => links.mailto.add(l));
  (content.match(/https?:\/\/(maps\.google\.com|goo\.gl|www\.google\.com\/maps)[^"'\s`]+/g) || []).forEach(l => links.maps.add(l));
  (content.match(/https?:\/\/(www\.)?instagram\.com[^"'\s`]+/g) || []).forEach(l => links.instagram.add(l));
  (content.match(/https?:\/\/(www\.)?facebook\.com[^"'\s`]+/g) || []).forEach(l => links.facebook.add(l));
  (content.match(/https?:\/\/(www\.)?youtube\.com[^"'\s`]+/g) || []).forEach(l => links.youtube.add(l));
}

console.log('=== VERIFIED ALL EXTERNAL LINKS ===');
for (const [k, v] of Object.entries(links)) {
  console.log(`\n--- ${k.toUpperCase()} (${v.size}) ---`);
  for (const item of v) {
    console.log(`  ${item}`);
  }
}
