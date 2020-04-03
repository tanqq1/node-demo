
const printProgramInfo = require("./info")
const getCurrentTime = require("./dateTime")
const program = require("commander")
const ora = require('ora');
const EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();

const printText = process.argv[3];
const wiatTime = process.argv[5] * 1000;




setTimeout(() => {
    spinner.stop();
    console.log(printText)
    console.log(program.message)
}, wiatTime);

program
  .option('-t, --time <number>', '等待时间 (秒)', 3)
  .option('-m, --message <string>', '要输出的信息', 'Hello World')
  .parse(process.argv);

console.log("接收的参数......",process.argv)

printProgramInfo();

console.log("当前时间",getCurrentTime())
const spinner = ora('正在加载中，请稍后 ...').start();

emitter.on('print',(text)=>{
    console.log("print事件被触发...",text)
})
emitter.emit("print","啦啦啦啦")
emitter.on("exit",()=>{
    console.log("推出执行了")
})