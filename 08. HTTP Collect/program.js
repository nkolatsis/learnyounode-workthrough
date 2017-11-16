var http = require("http");

http.get(process.argv[2], (response) => {
    var collectData = []
    //response.on("data", collectData.push) // does not work
    response.on("data", (data) => {
        collectData.push(data)
    })
    response.on("error", console.error)
    response.on("end", (end) => {
        var dataString = collectData.reduce(function(combined, data) {
            return combined + data
        })
        console.log(dataString.length)
        console.log(dataString)
    })
}).on("error", console.error)

/* learnyounode official solution

var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
    if (err) {
        return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
    }))
}}

*/