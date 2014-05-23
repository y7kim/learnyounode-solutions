var dir = process.argv[2];
var ext = process.argv[3];

var myModule = require('./mymodule.js');

function listFiles(err, data) {
    if (err) console.log(err);
    console.log(data.join('\n'));
   }
   
myModule(dir, ext, listFiles);