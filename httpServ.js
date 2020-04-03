const http = require('http');
const repl = require('repl');
let con = repl.start().context;
con.msg = 'soppp'
console.log("%d",123, 'hello')
console.log("%d", 'hello');
console.info("info...")
console.error("error....")


// http.createServer(function(req, res) {
//     // req : 客户端请求对象
//     // res  服务端所做出的的响应对象
//     res.writeHead(200, {
//         'Content-Type':'text/html'
//     })
//     res.write('<head><meta charset="utf-8" /></head>')
//     res.end('你好')
// }).listen(2001,"127.0.0.1")
// // listen()  用于指定服务器使用的服务端口及服务器绑定地址 并进行监听
// console.log("Server running at http://127.0.0.1:2001")