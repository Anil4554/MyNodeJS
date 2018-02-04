const csvFilePath='customer-data.csv'
const csv=require('csvtojson')
const fs= require('fs')
let arr = []
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    arr.push(jsonObj)
})
.on('done',(error)=>{
    if (error) return console.error(error)
    console.log(arr)
    fs.writeFileSync('costumer-data.json',JSON.stringify(arr, null, 2), ()=>{
        console.log("Converted successfully")
        process.exit(0)
    })


})