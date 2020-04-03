const fs = require('fs');
const data = fs.readFileSync('input.txt');  //异步，阻塞性方法

//非阻塞性方法
fs.readFile('input.txt',(err, data) => {
    if(err) { console.log(err) }
    console.log(data.toString());
})
console.log(data.toString());
console.log("程序执行结束");