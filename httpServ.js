const http = require('http');
const fs = require('fs');
const querystring = require("querystring")

const wr = fs.createWriteStream('./httpmsg.txt');

const httpServe = http.createServer();
httpServe.setTimeout(10 * 1000);
httpServe.listen(4154, 'localhost',() => {
    console.log("服务器开始监听")
})
httpServe.on('connection',(socket) => {
    console.log("客户端连接已建立")
})

httpServe.on('request',(req, res) => {
    if(req.url !== "/favicon.ico"){
        console.log("接收到客户端发来的请求")
        wr.write(`客户端请求所用的方法：${req.method}` + '\r\n')
        wr.write("客户端请求所用url字符串："+ req.url + "\r\n")
        wr.write("客户端请求头对象："+ JSON.stringify(req.headers) + '\r\n')
        wr.write("客户端请求所用的http版本为：" + req.httpVersion)
        req.on('data', data => {
            let data2 = decodeURIComponent(data);
            console.log("客户端请求发来的数据", querystring.parse(data2))
        })
        req.on('end', () => {
            console.log("客户端请求流中的数据读取完")
        })
        req.on('data', data => {
            console.log("客户端发过来的数据", data.toString())
        })
        // res.setHeader("Access-Control-Allow-Origin","http://localhost")
        res.writeHead(200,{
            "Access-Control-Allow-Origin":"*"
        })
        // console.log("套接字.....",res.socket.remoteAddress)
        res.write("服务器返回的数据")
        // console.log("获取head信息",res.getHeader('content-type'))
        res.end()
        // wr.end("\r\r以上就是socket端口对象输出的信息")
    }
})

httpServe.on('error' , err => {
    console.log("连接服务器失败", err.message)
    httpServe.close()
})

httpServe.on('close',() => {
    console.log("服务器已关闭")
})