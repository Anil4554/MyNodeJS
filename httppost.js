var http = require('http')
var postData = {
    "key1":"Anil",
    "key2":"Piyush"
}

const options = {
    hostname: 'localhost',
    port: 3020,
    path: '/data',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-length':Buffer.byteLength(JSON.stringify(postData))
    }
  }

var req = http.request(options,(res)=>{
    res.on('data',(chunk)=>{
        console.log(chunk.toString())
    })
    res.on('end', ()=>{
        console.log("End of data")
    })

})

req.write(JSON.stringify(postData))
req.end()