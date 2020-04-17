const http = require('http');

const options = {
    hostname:'localhost',
    port: 4154,
    path:'/',
    method:'GET'
}

const options1 = {
    hostname:'www.tiaofangzi.com',
    path:'/',
    method:'GET'
}

http.get(options, res => {
    console.log("状态码",res.statusCode)
})
http.get(options1, res => {
    console.log("状态码11",res.statusCode)
})

let req = http.request(options,(res) => {
    res.on('data', data => {
        console.log("响应内容...",data.toString())
    })
})

req.write("一盆绿萝")

req.on("error", (err) => {
    console.log("连接出错啦", err.code)
})

req.on('socket',(socket) => {
    console.log("分配端口....")
    // console.log("分配端口....",socket)
})

req.on('timeout', () => {
    req.abort()
})

req.end()