 /*Escribe un programa que realice una petición HTTP GET a una URL provista  
  como primer argumento del programa. Almacena todos los datos recibidos del  
  servidor, es decir no sólo el primer evento "data", y luego escribe a  
  consola dos líneas:  
   
   » En la primera escribe la cantidad de caracteres recibidos.                  
   » En la segunda escribe la totalidad de caracteres recibidos (todo el                                                                            
     string).    */   

var http = require("http");

var url = process.argv[2];

http.get(url, function(response){
    var body = "";
    response.on("data", function(d){
        body += d.toString();
    });

     response.on('end', function() {
        // Data reception is done, do whatever with it!
        console.log(body.length);
        console.log(body);                
    });
});  