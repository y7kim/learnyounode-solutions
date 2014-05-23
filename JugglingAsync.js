var http = require('http');
var resultFinal = [];

recurse (process.argv[2], function() {
    recurse (process.argv[3], function() {
        recurse (process.argv[4]);
    });
});

function recurse (url, callback) {
http.get(url, function(req) {
    req.setEncoding('utf8');
    var result = "";
    req.on("data", function (data) {
        result += data;
        });
    req.on("end", function () {
        console.log(result);
        if(callback) callback();
    });
});
};
