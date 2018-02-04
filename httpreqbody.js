const http = require('http')


http.createServer((req,res)=>{
    console.log(req.method)
    console.log(req.headers)
    console.log(req.statusCode)
    console.log(req.url)

    if(req.method == 'POST'){
        req.on('data',(chunk)=>{
            console.log(chunk.toString('utf-8'))
        })
        req.on('end',()=>{console.log("data ended")})

    }
    else{
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end("Hellow world\n")
    }
}).listen(3000)