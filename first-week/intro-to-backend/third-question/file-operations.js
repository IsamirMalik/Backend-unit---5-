const fs = require('node:fs');

const readData = (fileName) => {
    const data = fs.readFileSync(fileName, 'utf-8');
    return data
};

let readTheData = readData('data.txt');
console.log(readTheData);

const appendFileData = (fileName, data) => {

    fs.appendFileSync(fileName, data);


}

module.exports = {appendFileData , readData};

