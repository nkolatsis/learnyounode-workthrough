var http = require("http")
var map = require("through2-map")

var server = http.createServer(function reqListener(req, res) {
    if (req.method == "POST") {
        var uppercaser = map(function (chunk) {
            return chunk.toString().toUpperCase()
        })
        req.pipe(uppercaser).pipe(res)
    }
})
server.listen(process.argv[2])