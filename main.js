const fs = require('fs');
const fun = require('./info')
const data = fs.readFileSync('input.txt');  //异步，阻塞性方法

//非阻塞性方法
fs.readFile('input.txt',(err, data) => {
    if(err) { console.log(err) }
    console.log(data.toString());
})
console.log(data.toString());
console.log("程序执行结束");
console.log("引入的函数有啥",fun)
console.log("11111111111",fun.test)