const {appendFileData , readData} = require('./file-operations');

let file = 'data.txt';
let data = 'This is Appended data';

readData(file);
appendFileData(file , data);
readData(file);