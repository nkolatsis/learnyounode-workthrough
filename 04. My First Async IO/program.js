var file = process.argv[2];
var fs = require("fs");

fs.readFile(file, "utf8", (err, contents) => {
    if (err) throw err;
    var newlines = contents.split("\n").length-1;
    console.log(newlines);
});
