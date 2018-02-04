var event = require('events')
var eventEmitter = new event.EventEmitter()
val = 1; 
cdVal = 0;
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  
});
rl.on('line',(line)=>{
    cdVal = parseInt(line)
    val = 1
    eventEmitter.emit('proceed')
})
eventEmitter.once('proceed',()=>{
console.log(typeof(cdVal))    
console.log("Entered countdown value is: "+cdVal)


setInterval(()=>{
    if(val<=cdVal){
        
        process.stdout.write((val++).toString())
    }
    else{
       clearInterval() 
       console.clear()
       
    }
    
    
}, 1000)
})
