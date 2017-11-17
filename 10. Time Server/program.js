var net = require("net")
var strf = require("./strftime")

var server = net.createServer((socket) => {
    var time = strf("%F %H:%M")
    socket.write(time + "\n")
    socket.end()
})
server.listen(process.argv[2])