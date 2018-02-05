const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

mytext = fs.readFileSync("./mypage.html","utf-8")
mytext2 = fs.readFileSync("./mypage2.html","utf-8")

var myApp = express()
port = 3020
myApp.use(bodyParser.json())
myApp.get('/mybot',(req, res)=>{
    res.send(mytext)
})
myApp.get('/contact',(req, res)=>{
    res.send(mytext2)
})
myApp.post('/data', (req,res)=>{
    console.log(req.body['key1'])
    res.send("Hey i got the keys")
})
myApp.listen(port)
console.log("Server running at: http://localhost:"+port)