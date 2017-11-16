var file = process.argv[2];
var fs = require("fs");

var contents = fs.readFileSync(file).toString();
var split = contents.split("\n");
console.log(split.length - 1);