var dir = process.argv[2];
var ext = "." + process.argv[3];
var fs = require("fs");

fs.readdir(dir, function dirListCallback(err, list) {
    if (err) console.log(err);
    for (let i = 0; i < list.length; i++) {
        if (list[i].includes(ext)) {
            console.log(list[i]);
        }
    }
});
