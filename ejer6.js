var filterFiles = require("./FilterFiles.js")

var path = process.argv[2];
var ext = process.argv[3];

filterFiles(path, ext, function(err,files){
    files.forEach(function(elem){console.log(elem)});
})

