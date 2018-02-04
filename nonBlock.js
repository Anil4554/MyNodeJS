var fs = require('fs')

fs.readFile("none.txt",function(err, data){
if (err) return console.error(err);
console.log(data.toString());
})