const events = require('events');

const eventEmiter = new events.EventEmitter();

// EventEmitter类自身拥有的事件 newListener, removeListener
eventEmiter.on('newListener',(value) => {
    console.log("添加了一个监听事件")
})
eventEmiter.on("removeListener",() => {
    console.log("移除了一个监听事件")
})
eventEmiter.on('event1',(arg1,arg2) => {console.log("listen1", arg1, arg2)});
eventEmiter.on('event1',(arg1,arg2) => {console.log("listen2", arg1, arg2)});

eventEmiter.addListener('event2',(text) => {console.log("addListener.....",text)});

eventEmiter.once('event3',() => {console.log("只执行一次的啦")});

eventEmiter.emit('event1',"hello", "world");
eventEmiter.emit('event2',"so?")
// sb(12)

eventEmiter.emit('event3');
eventEmiter.emit('event3');
console.log(" event1 count", eventEmiter.listenerCount('event1'))
eventEmiter.removeListener('event2',() => {console.log("------")});
eventEmiter.removeAllListeners('event1')

eventEmiter.emit('event2');

console.log("事件监听数量...",events.EventEmitter.listenerCount(eventEmiter, 'event1'))
// eventEmiter.emit('error');