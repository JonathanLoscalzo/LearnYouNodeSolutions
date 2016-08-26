module.exports = function PrintFiles(dir, ext, callback){
    var fs = require("fs");
    fs.readdir(dir, function(err, files){
        if (err){
            callback(err,null);
        } else {
            callback(
                null, 
                files.filter(function(elem){
                    if (elem.includes("." + ext)){
                        return elem;
                    }
                }));
        }
    })
}