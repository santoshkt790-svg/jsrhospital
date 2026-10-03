const fs = require('fs');
const path = require('path');

const compDir = path.join(__dirname, '..', 'components');
const files = fs.readdirSync(compDir);

files.forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.jsx')) {
    const filePath = path.join(compDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = content
      .replace(/@\/context\//g, '../context/')
      .replace(/@\/data\//g, '../data/')
      .replace(/@\/components\//g, '../components/');
    if (updated !== content) {
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`Updated imports in ${file}`);
    }
  }
});
