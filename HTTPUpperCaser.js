var http = require('http');

var server = http.createServer(function(req,res) {
    req.on("data", function(data) {
        if(req.method == "POST") {
            res.write(data.toString().toUpperCase());
           }
    });
    req.on("end", function() {
        res.end()
    });
});

server.listen(process.argv[2]);