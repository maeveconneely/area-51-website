var http = require("http");
var fs = require("fs");

// fs is like reading files in python
//  look this up for further things
// create or open files
http.createServer(function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
