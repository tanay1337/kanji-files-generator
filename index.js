const data = require('./data/kanji.json')
const fs = require('fs')

// Generate files for only the first 100 entries
const entries = 100

function callback() {  }

for(let i=0; i<entries; i++) {
    let json = JSON.stringify(data[i])
    fs.writeFile(`./generated_files/kanji-${i}.json`, json, 'utf8', callback)
}

