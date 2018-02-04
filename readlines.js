const event = require('events')
var eventEmitter = new event.EventEmitter

/*
rl.question('Please enter an answer', (ans)=>{
    console.log("I recorded your answer: ",ans)
})*/

eventEmitter.once('next',()=>{
        process.stdin.on('data',(dat)=>{
        if (dat.toString('utf-8') == 'quit'){
            clearInterval()
            process.exit(0)
        }
        console.log("What you entered is: "+dat)
        
     })
     
})

setInterval(()=>{eventEmitter.emit('next')
                    console.log("Time lapsed: Try Next")},5000)