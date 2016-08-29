/*
Escribe un servidor HTTP que reciba sólo peticiones POST y convierta los  
  caracteres del cuerpo de la petición a mayúsculas y lo devuelva al  
  cliente.  
   
  El servidor deberá escuchar en un puerto cuyo número será el primer  
  argumento del programa. 

  var http = require('http')  
     var map = require('through2-map')  
       
     var server = http.createServer(function (req, res) {  
       if (req.method != 'POST')  
         return res.end('send me a POST\n')  
       
       req.pipe(map(function (chunk) {  
         return chunk.toString().toUpperCase()  
       })).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2]))
*/

var net = require("http");
var map = require("through2-map");
var port = process.argv[2];
net.createServer(function (req, res) {
    if (req.method == 'POST'){
        res.writeHead(200,"OK",{ 'content-type': 'text/plain' });
        req.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(res);
}}).listen(port);  
    