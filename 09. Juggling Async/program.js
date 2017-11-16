var http = require("http")
var concat = require("concat-stream")

var queue = []
queue.push(getPageAsObj(process.argv[2], passObjToQueue))
queue.push(getPageAsObj(process.argv[3], passObjToQueue))
queue.push(getPageAsObj(process.argv[4], passObjToQueue))

function getPageAsObj(argv, callback) {
    http.get(argv, (response) => {
        var collectedData = []
        response.setEncoding("utf8")
        response.on("data", (data) => {
            collectedData.push(data)
        })
        response.on("error", console.error)
        response.on("end", (end) => {
            collectedData = collectedData.reduce(function(first, second) {
                return first + second
            })
            return callback(null, Object(data = collectedData, completed = true))
        })
    }).on("error", console.error)
}

function passObjToQueue(err, obj) {
    console.log(obj)
    completedCount += 1;
    return obj;
}

var completedCount = 0

setInterval(function(){
    if (typeof(queue[0]) != undefined && queue[1] != undefined && queue[2] != undefined) {
        console.log("got here")
        if (queue[0]["completed"] === true) {
            if (queue[0]["completed"] === true) {
                if (queue[0]["completed"] === true) {
                    console.log(queue[0]["data"])
                    console.log(queue[1]["data"])
                    console.log(queue[2]["data"])
                }
            }               
        }
    }
    console.log(queue)
    console.log(completedCount)
}, 500)