/*

Escribe un servidor de HTTP que sirva datos en formato JSON cuando reciba  
  una petición GET con la ruta (endpoint) '/api/parsetime'. Asume que la  
  petición tiene un parámetro 'iso' cuyo valor es un fecha hora en formato  
  ISO.  
   
  Por ejemplo:  
   
  /api/parsetime?iso=2013-08-10T12:10:15.474Z  
   
  La respuesta JSON debe contener únicamente los propiedades 'hour',  
  'minute' y 'second' correspondientes a la fecha recibida. Ejemplo:  
   
     {  
       "hour": 14,  
       "minute": 23,  
       "second": 15  
     }  
   
  Luego, agrega un segundo endpoint con ruta '/api/unixtime' que reciba los  
  mismos parámetros que la anterior pero que devuelva la fecha en formato  
  UNIX, por ejemplo:  
   
     {   
         "unixtime": 1376136615474   
     }  
   
  El servidor deberá escuchar en un puerto cuyo número será el primer  
  argumento del programa.  


     var http = require('http')  
     var url = require('url')  
       
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
       
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2]))  



  */

var net = require("http");
var datejs = require("datejs");
var url = require('url');
var port = process.argv[2];
net.createServer(function (req, res) {
    if (req.method == 'GET'){
        res.writeHead(200,"OK",{ 'Content-Type': 'application/json' });
        var urlRequest = req.url;
        var toRet = {};
        var parsedUrl = url.parse(urlRequest, true);
        switch (parsedUrl.pathname) {
            case "/api/parsetime":
                var date = new Date(parsedUrl.query.iso);
                toRet = { 
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds(),
                };
                break;
            case "/api/unixtime":
                toRet = { unixtime: (new Date(parsedUrl.query.iso)).getTime() };
            break;
        }
        res.write(JSON.stringify(toRet));
        res.end();
    }
    }).listen(port);  