var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer(function(req, res) {
    var stream = fs.createReadStream(path);
    stream.pipe(res);
    
    /* stream.on('open', function() {
        stream.pipe(res);
    });
    stream.on('error', function(err) {
        res.end(err)
    }); */
});
server.listen(port)