var http = require("http");

var server = http.createServer(function(req,res){
     console.log("客服端和服务器以建立通信" + req.url);
	 //响应头
     res.writeHead(200,{"Content-type":"text/plain"});
     res.end("hey nodejs");
});

server.listen(3000,"127.0.0.1");

console.log("server is running...");