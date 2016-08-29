/*
  ¡Crea un Servidor de tiempo y hora TCP !  
   
  El servidor debe escuchar conexiones TCP en el puerto indicado por el  
  primer argumento del programa. Para cada conexión debes escribir la fecha  
  actual y la hora en formato 24hs del siguiente modo:  
   
     "AAAA-MM-DD hh:mm"  
   
  seguido por un carácter newline('\n'). Tanto el mes, el día como la hora y  
  minuto deben tener un 0 para ocupar 2 espacios, por ejemplo:  
   
     "2013-07-06 17:42"  
*/

var net = require("net");
var datejs = require("datejs");
var port = process.argv[2];
var server = net.createServer(function (socket) {  
    var date = new Date();
    socket.write(date.toString("yyyy-MM-dd HH:mm")+"\n");
    socket.end();
});  

server.listen(port);  