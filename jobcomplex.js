var Job = require('./job.js')
var job = new Job()
job.on('done', function(details){
console.log('Weekly email jobs was completed at', details.completedOn)
})

job.emit('start')