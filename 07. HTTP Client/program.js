var http = require("http");

http.get(process.argv[2], function (response) => {
    response.setEncoding("utf8")
    response.on("data", (data) => {
        console.log(data);
    })
    response.on("error", (err) => {
        console.error(err);
    })
    response.on("end", (end) => {
    })
})

/* learnyounode official solution

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)

Notes:
- A function can be passed as the second parameter and the retrieved data will
be passed to the function automatically when an event occurs.
- The get request can also fail and should get an error event handler.
*/