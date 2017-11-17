var http = require("http")
var concat = require("concat-stream")

for (let i = 2; i < process.argv.length; i++) {
    passPageToQueue(process.argv[i], i)
}

var queue = []
function passPageToQueue(argv, pos) {
    http.get(argv, (response) => {
        var collectedData = []
        response.setEncoding("utf8")
        response.on("data", (data) => {
            collectedData.push(data)
        })
        response.on("error", console.error)
        response.on("end", (end) => {
            var page = collectedData.reduce(function(first, second) {
                return first + second
            })
            queue[pos-2] = page
        })
    }).on("error", console.error)
}

setInterval(function(){
    var defined = 0
    for (let i = 0; i < queue.length; i++) {
        if (typeof(queue[i] != undefined)) defined +=1
    }
    if (defined == process.argv.length - 2) {
        for (pageObj of queue) {
            console.log(pageObj)
        }
        clearInterval(this)
    }
}, 500)

/* official solution

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
    for (var i = 0; i < 3; i++) {
    console.log(results[i])
    }
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
        return console.error(err)
        }

        results[index] = data.toString()
        count++

        if (count === 3) {
        printResults()
        }
    }))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}

// The logic flow of the official solution is simpler and the program is cleaner.

*/