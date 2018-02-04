var event1 = require('events');
var eventEmitter = new event1.EventEmitter();


var connectHandler = function connect() {
console.log('connection successful');
}
eventEmitter.on('connection',connectHandler);
eventEmitter.emit('connection');


console.log("Pg Ended");