const fs = require('node:fs');

function readData (fileName){
    const data = fs.readFileSync(fileName, 'utf-8');
    return data
}

module.exports = readData

const file = 'Data.txt';

console.log(readData(file))