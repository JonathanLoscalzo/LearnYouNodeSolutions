/*
  Escribe un servidor HTTP que sirva un mismo archivo de texto para todas  
  las peticiones que reciba.  
   
  El servidor deberá escuchar en un puerto cuyo número será el primer  
  argumento del programa. Como segundo argumento recibirá la ruta a la  
  ubicación del archivo. Debes usar fs.createReadStream() para servir como  
  stream los contenidos del archivo en la respuesta del servicio. 
*/

var net = require("http");
var fs = require("fs");
var port = process.argv[2];
var path = process.argv[3];
var server = net.createServer(function (req, res) {
    res.writeHead(200,"OK",{ 'content-type': 'text/plain' });  
    fs.createReadStream(path).pipe(res);
});  

server.listen(port);