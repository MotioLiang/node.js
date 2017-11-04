var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
     if (req.url !== "/favicon.ico") {
     	res.writeHead(200,{"Content-type":"text/html"});
           if (req.url == "/" || req.url == "/home") {
           	  var myReadStream = fs.createReadStream(__dirname+"/home.html","utf8");
           	  myReadStream.pipe(res);
           }else if(req.url == "/phone"){
           	  var myReadStream = fs.createReadStream(__dirname+"/phone.html","utf8");
           	  myReadStream.pipe(res);
           }else if (req.url == "/pc") {
           	  var myReadStream = fs.createReadStream(__dirname+"/pc.html","utf8");
           	  myReadStream.pipe(res);
           }else{
           	  var myReadStream = fs.createReadStream(__dirname+"/404.html","utf8");
           	  myReadStream.pipe(res);
           }
     }
});

server.listen(3000,"localhost");