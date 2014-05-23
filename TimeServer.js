var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket) {
    var d = new Date();
    var date = d.getFullYear() + "-" + "0" +(d.getMonth()+1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();
    console.log();
    socket.end(date);
});
server.listen(port);