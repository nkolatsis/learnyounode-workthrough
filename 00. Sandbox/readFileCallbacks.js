var fs = require("fs");
var myNumber = undefined;

function addOne(callback) {
    fs.readFile("00.\ Sandbox/number.txt", function doneReading(err, fileContents) {
        if (err) throw err;
        myNumber = parseInt(fileContents);
        myNumber++;
        callback();
    });
};

function logMyNumber() {
    console.log(myNumber++);
}

addOne(logMyNumber);
