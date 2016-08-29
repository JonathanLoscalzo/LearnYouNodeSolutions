 /* esta vez tu programa recibirá tres URLs como argumentos.  
    Tu programa deberá imprimir el contenido de cada una de las URLs en  
  consola en el mismo orden que fueron recibidos los argumentos. No deberás  
  imprimir el largo, solo el contenido como String, pero debes respetar el  
  orden de llegada de los argumentos.  
   
  */   

var http = require("http");
var after = require("after");
var next = after(3, getItWork);

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var body = ["","",""];
function getItWork(){
    body.forEach(function(element) {
        console.log(element);
    });
}

http.get(url1, function(response){
    response.on("data", function(d){
        body[0] += d.toString();
    });

     response.on('end', function() {
        next();                
    });
});

http.get(url2, function(response){
    response.on("data", function(d){
        body[1] += d.toString();
    });

     response.on('end', function() {
        next();         
    });
});

http.get(url3, function(response){
    response.on("data", function(d){
        body[2] += d.toString();
    });

     response.on('end', function() {
        next();                
    });
});