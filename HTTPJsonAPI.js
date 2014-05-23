var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
    var parsed = url.parse(req.url, true);
    var date = new Date(parsed.query.iso);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if(parsed.pathname == '/api/parsetime') {
        res.write(JSON.stringify({ 
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
            }));
    };
    if(parsed.pathname == '/api/unixtime') {
        res.write(JSON.stringify({ unixtime: Math.round(date.getTime()) }));
    };
    res.end();
});

server.listen(port);