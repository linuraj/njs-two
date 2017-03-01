var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, resp){
    console.log(req.headers)

    resp.writeHead(200, {'Content-Type' : 'text/html'});
    resp.end('<H1>GOD is Great!</H1>');
});

server.listen(port, hostname, function(){
    console.log(`Server is running at http://${hostname}:${port}/`);
});