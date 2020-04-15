const os = require("os");
const path = require("path");

function printProgramInfo() {
    console.log("当前用户信息:",os.userInfo().username)
    console.log("当前进程ID:",process.pid)
    console.log("当前脚本路径...",__filename)
}
console.log("----------",path.resolve(__dirname,'..'))
console.log("————dirname",__dirname)
module.exports = printProgramInfo;
