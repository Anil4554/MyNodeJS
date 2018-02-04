var mypromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Yay! got it")
    }, 5000)
})


mypromise.then((value)=>{
    console.log(value)
},(value)=>{
    console.error(value)
})