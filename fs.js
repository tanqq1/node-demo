const fs = require('fs')

fs.readFile('./input.txt',{flag: 'r+', encoding:'utf8'}, (err, data) => {
    if(err){
        console.log("读取文件失败")
    } else {
        console.log("读取的文件",data)
    }
})

const fcontent = fs.readFileSync('./input.txt',{encoding:'utf8'});
console.log("同步读取文件返回值", fcontent)

fs.writeFile('./input.txt','\r在写入一行数据',{flag:'a'}, (err) => {
    if(err){
        console.log("写入文件错误")
    }else {
        console.log("写入文件成功")
    }
})

fs.appendFile('./input.txt',"\r今天是四月13号呢",err => {
    if(err){
        console.log("插入数据失败")
    }else {
        console.log("插入数据成功")
    }
})

fs.open('./input.txt','r', (err, fd) => {
    const bff = Buffer.alloc(200);
    if(err){
        console.log("打开文件错误")
    }else {

        fs.read(fd, bff, 5, 9, 4, (err, bytesRead, buffer) => {
            console.log("读取的文件是",buffer.toString())
        })
    }
})