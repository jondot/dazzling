const fs = require('fs')
const path = require('path')
const wwwpkg = path.join(__dirname, '../packages/dazzling-core/_templates/site/new/contents/www/package.json')
const p = require(wwwpkg)
const ver = require(path.join(__dirname, '../lerna.json'))['version']
p.dependencies['dazzling-components'] = '^' + ver
fs.writeFileSync(wwwpkg, JSON.stringify(p, null, 4))
console.log("wrote version: " + ver)
