var http = require("http");

var moduleTemplate = require("./moduleTemplate"); //requre temp module

//fucntion execuded when server gets a request
function onRequest(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello");
  response.end();
}

http.createServer(onRequest).listen(8000);
