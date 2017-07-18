
// import http module
var http = require('http');  

//function onrequest take 2 arguments request and response. once a request cones tell node what response
//status code ok which is 200, javacode object as second arguments
function onRequest(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'}); 
	response.write('Hello World');
	response.end();
}

// Create server method, listen to port 8000 for all the requests comming to this server, 

http.createServer(onRequest).listen(8080);