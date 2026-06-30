const fs = require('fs');

const content = {
  contacto:       JSON.parse(fs.readFileSync('_content/contacto.json', 'utf8')),
  index:          JSON.parse(fs.readFileSync('_content/index.json', 'utf8')),
  corporativo:    JSON.parse(fs.readFileSync('_content/corporativo.json', 'utf8')),
  social:         JSON.parse(fs.readFileSync('_content/social.json', 'utf8')),
  gal_corp:       JSON.parse(fs.readFileSync('_content/corp-galeria.json', 'utf8')),
  gal_social:     JSON.parse(fs.readFileSync('_content/social-galeria.json', 'utf8')).fotos,
};

function get(obj, path) {
  return path.split('.').reduce((o, k) => (o != null ? o[k] : undefined), obj);
}

function renderValue(val) {
  if (val && val.eventos) {
    return val.eventos.map(ev => {
      const fotosHtml = ev.fotos.map(f =>
        `<a><img src="${f.img}" alt="${f.alt || ''}" /></a>`
      ).join('\n        ');
      return `<div class="gal-event">
      <div class="gal-event-header">
        <h2 class="gal-event-titulo">${ev.titulo}</h2>${ev.subtitulo ? `\n        <p class="gal-event-sub">${ev.subtitulo}</p>` : ''}
      </div>
      <div class="gal">
        ${fotosHtml}
      </div>
    </div>`;
    }).join('\n    ');
  }
  if (Array.isArray(val)) {
    return val.map(item =>
      `<a><img src="${item.img}" alt="${item.alt || ''}" /></a>`
    ).join('\n      ');
  }
  return val;
}

function processFile(file) {
  let text = fs.readFileSync(file, 'utf8');

  // Block replacement: <!-- cms:key -->...<!-- /cms:key --> (HTML files, preserves markers)
  text = text.replace(/<!-- cms:([\w.]+) -->[\s\S]*?<!-- \/cms:\1 -->/g, (match, key) => {
    const val = get(content, key);
    return val != null
      ? `<!-- cms:${key} -->${renderValue(val)}<!-- /cms:${key} -->`
      : match;
  });

  // Inline replacement: {{cms:key}} — injects value directly, no surrounding markers (for JS/attr contexts)
  text = text.replace(/\{\{cms:([\w.]+)\}\}/g, (match, key) => {
    const val = get(content, key);
    return val != null ? String(val) : match;
  });

  fs.writeFileSync(file, text);
  console.log('  ' + file);
}

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const files = [...htmlFiles, 'site.js'];

console.log('Building...');
files.forEach(processFile);
console.log('Done.');
