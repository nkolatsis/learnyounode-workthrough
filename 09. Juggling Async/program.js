var http = require("http")
var concat = require("concat-stream")

var queue = []
queue.push(getPageAsObj(process.argv[2], requestCompleted))
queue.push(getPageAsObj(process.argv[3], requestCompleted))
queue.push(getPageAsObj(process.argv[4], requestCompleted))

function getPageAsObj(argv, callback) {
    http.get(argv, (response) => { // try function(response) later
        var collectData = []
        response.on("data", collectData.push.bind(collectData))
        response.on("error", console.error)
        response.on("end", (end) => {
            return callback(null, collectData.toString())
        })
    }).on("error", console.error)
}

function requestCompleted(err, data) {
    if (err) console.error(err)
    completedCount += 1;
    return {"data": data, completed: true}
};
var completedCount = 0
while(true) {
    if (completedCount > 2) {
        if (queue[0]["completed"] === true &&
            queue[1]["completed"] === true &&
            queue[2]["completed"] === true) {
                console.log(queue[0]["data"])
                console.log(queue[1]["data"])
                console.log(queue[2]["data"])
                break
            }
    } else {
        setTimeout(function(){
            console.log(completedCount)
        }, 500)
    }
}