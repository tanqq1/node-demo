console.log("%d",123, 'hello')
console.log("%d", 'hello');
console.info("info...")
console.error("error....")

// console.time() 与 console.timeEnd()用来计算时间差
// console.dir()用来查看输出对象内容
// console.trace() 用于将当前位置的栈信息作为标准错误信息进行输出，所接受的参数只是一个标识符
// console.assert()  对一个表达式的执行结果进行评估，如果职系那个结果为false，则输出一个消息字符串并抛出AssertionError异常
// 定时器的unref和ref()方法，unref()取消指定回调函数的调用，ref()设定后，在设定的间隔时间后继续调用改回调函数
// unref方法于clear方法的区别就是通过unref方法可以取消定时函数的回调，但是可以通过ref()方法恢复回调函数的调用
console.time("f time")
const user = new Object();
user.name = "tanqq";
user.getName = function(){
    return this.name
}
console.dir(user)
console.timeEnd("f time")
// console.trace("trace")
// console.assert(22 < 14 , "some error")
let timId = setTimeout((...args) => {
    console.log("hello",args)  //hello ["hello", "world"]
    console.timeEnd("first")
},500,"hello", "world")
timId.unref();
console.time("first")
timId.ref();
// clearTimeout(timId);

exports.user = user;
