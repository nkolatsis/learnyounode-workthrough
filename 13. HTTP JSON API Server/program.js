var http = require("http")
var url = require("url")

var server = http.createServer((req, res) => {
    if (req.method == "GET") {
        var endpoint = url.parse(req.url, true)
        var date = new Date(endpoint["query"]["iso"])
        if (endpoint.pathname == "/api/parsetime") {
            res.end(JSON.stringify({
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds()
            }))
        }
        if (endpoint.pathname == "/api/unixtime") {
            res.end(JSON.stringify({
                "unixtime": date.valueOf()
            }))
        }
    }

})

server.listen(process.argv[2])


/* official solution notes

var http = require('http')
var url = require('url')

function parsetime (time) {  // over-engineered
    return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
    }
}

function unixtime (time) {
    return { unixtime: time.getTime() }  // what i was looking for
}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
    } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
    }

    if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
    } else {
    res.writeHead(404)
    res.end()
    }
})
server.listen(Number(process.argv[2]))

*/