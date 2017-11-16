function filterFiles(dir, ext, callback) {
    var fs = require("fs");
    var path = require("path");

    fs.readdir(dir, 'utf8', (err, list) => {
        if (err) return callback(err);

        var filterList = [];

        for (let i = 0; i < list.length; i++) {
            if (path.extname(list[i]) == "." + ext) {
                filterList.push(list[i]);
            }
        }
        return callback(null, filterList);
    })
}


module.exports = filterFiles;