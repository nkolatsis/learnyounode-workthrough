function filterFiles(dir, ext, callback) {
    var fs = require("fs")
    var path = require("path")

    fs.readdir(dir, 'utf8', (err, list) => {
        if (err) return callback(err);

        var filteredList = [];

        for (let i = 0; i < list.length; i++) {
            if (path.extname(list[i]) == "." + ext) {
                filteredList.push(list[i]);
            }
        }
        /* LearnYouNode standard solution:
        filteredList = list.filter(function(file) {
            return path.extname(file) === '.' + ext
        }) */
        
        return callback(null, filteredList);
    })
}


module.exports = filterFiles;