
const path = require('path');

function fileInfo(filePath){
     const fileName = path.basename(filePath);
     const dirName = path.dirname(filePath);
     const fileExt = path.extname(filePath);
     return {fileName, dirName, fileExt}
};


module.exports = fileInfo;