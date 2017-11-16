

console.log(module.exports);

function filterFiles(dirName, ext, fileListCallback) {
    var fs = require("fs");
    var files = fs.readdir(dirName, fileListCallback)
}

function fileListCallback(err, list) {
    if (err) throw err;
    return list;
}

module.exports = filterFiles;