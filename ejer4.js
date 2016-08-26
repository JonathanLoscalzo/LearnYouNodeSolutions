var fs = require("fs");
var sum = 0;
fs.readFile(process.argv[2], function (err, data) {
   console.log(data.toString().split("\n").length -1);
});