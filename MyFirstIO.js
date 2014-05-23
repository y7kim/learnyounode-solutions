var fs = require('fs');
var file = process.argv[2];

var contents = fs.readFileSync(file);

console.log(contents.toString().split('\n').length - 1);