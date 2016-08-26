
var fs = require("fs");
var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function(err, files){
    files.forEach(function(elem){
        if (elem.includes("."+ext)){
            console.log(elem);
        }
    })
});

