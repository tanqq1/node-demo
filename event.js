const events = require('events');

const eventEmiter = new events.EventEmitter();

eventEmiter.on('event1',(arg1,arg2) => {console.log("listen1", arg1, arg2)});
eventEmiter.on('event1',(arg1,arg2) => {console.log("listen2", arg1, arg2)});

eventEmiter.addListener('event2',(text) => {console.log("addListener.....",text)});

eventEmiter.once('event3',() => {console.log("只执行一次的啦")});

eventEmiter.emit('event1',"hello", "world");
eventEmiter.emit('event2',"so?")

eventEmiter.emit('event3');
eventEmiter.emit('event3');
console.log(" event1 count", eventEmiter.listenerCount('event1'))
eventEmiter.removeListener('event2',() => {console.log("------")});

eventEmiter.emit('event2');
// eventEmiter.emit('error');