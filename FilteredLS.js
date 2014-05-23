var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

var results = fs.readdir(dir, function(err, files) {
    if (err) throw err;
    for(var i = 0; i < files.length; i++) {
        if (files[i].split('.')[1] == ext) {
        console.log(files[i]);
        } 
    }
});