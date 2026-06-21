const fs = require('fs');

const content = {
  contacto: JSON.parse(fs.readFileSync('_content/contacto.json', 'utf8')),
  index: JSON.parse(fs.readFileSync('_content/index.json', 'utf8')),
  corporativo: JSON.parse(fs.readFileSync('_content/corporativo.json', 'utf8')),
  social: JSON.parse(fs.readFileSync('_content/social.json', 'utf8')),
};

function get(obj, path) {
  return path.split('.').reduce((o, k) => (o != null ? o[k] : undefined), obj);
}

function processFile(file) {
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/<!-- cms:([\w.]+) -->[\s\S]*?<!-- \/cms:\1 -->/g, (match, key) => {
    const val = get(content, key);
    return val != null ? `<!-- cms:${key} -->${val}<!-- /cms:${key} -->` : match;
  });
  fs.writeFileSync(file, html);
  console.log('  ' + file);
}

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
console.log('Building...');
files.forEach(processFile);
console.log('Done.');
