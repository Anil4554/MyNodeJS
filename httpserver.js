const http = require('http')


http.createServer((req, resp)=> {
    resp.writeHead(201,{'Content-type':'text/plain'})
    resp.end("Hello World\n")
    
}).listen(3000)

