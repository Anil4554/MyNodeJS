var myfunc = (i, me)=>{
    return new Promise((resolve,reject)=>{
        reject(me)
    })
}

myfunc("Mr.","Anil").then((printable)=>{
    console.log(printable +". This is what i mean")
},(printable)=>{
    console.error("Caught:"+printable)
}).catch((printable)=>{
    console.error("Caught:"+printable)
})
