const readLine = require("readline")
const rl = readLine.createInterface({input: process.stdin,
                   output: process.stdout});
recordedResp = 0

var question = ()=>{
    x = Math.floor(Math.random()*100)
    y = Math.floor(Math.random()*100)
    rl.prompt()
    console.log(x+" + "+y+" =")
}
var analyse = ()=>{
    if((x+y) == recordedResp){
        return true
    }
    else{
        return false
    }
}
var printResult = ()=>{
    if(analyse()){
        console.log("Correct")
    }
    else{
        console.log("Wrong")
    }
}

rl.on('line',(line)=>{
    recordedResp = parseInt(line)
})

question()
setInterval(()=>{
    printResult()
    question()
}, 6000)

