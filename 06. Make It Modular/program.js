var mymodule = require("./mymodule.js");

mymodule(process.argv[2], process.argv[3], (err, files) => {
    if (err) console.log(err);
    files.forEach(function (file) {
        console.log(file);
    })
})