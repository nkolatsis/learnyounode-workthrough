var fs = require("fs")
var http = require("http")

var writeHere = process.argv[3]

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(process.argv[3])
    stream.pipe(res)
})
server.listen(process.argv[2])

/* official solution notes

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })  // important to set the content type when we know it

    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))

*/