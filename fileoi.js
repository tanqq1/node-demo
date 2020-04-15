const fs = require('fs');


function tConsole(err, data, errText = "执行失败", succText="执行成功") {
    if(err){
        console.log(errText, err)
    }else {
        console.log(succText, data)
    }

}

// 读取一个文件中的内容并写入到另一个文件中
const file = fs.createReadStream('./input.txt',{encoding:'utf8'});
const out = fs.createWriteStream('./message.txt',{encoding:'utf8'});

// 直接将input.txt中的文件输入到message.txt文件中
// file.pipe(out)
// file.unpipe(out)

file.on('ready',() => console.log("准备开始读取文件"));
file.on('data', (data) => {
    console.log("读取的内容数据",data)
    out.write(data,(err) => {
        tConsole(err, '', '写入文件失败', '写入文件成功')
    })
})
out.on('drain', () => {
    console.log("缓存区中的数据已全部输出")
})

file.pipe()

file.on('end', () => {
    console.log("读取文件结束，字节长度是：",file.bytesRead)
    console.log("写入的文件长度是",out.bytesWritten)
    out.end("\r我再追加点内容的",() => {
        console.log("追加写入内容成功啦", out.bytesWritten)
        file.close()
    })
    // end 方法之后再执行write或报错，这时候可以被error事件监听到
    out.write("..kkk",(err) => {
        console.log("kjnknjk")
    })
})
out.on('error' , err => {
    if(err){
        console.log("写入文件出错啦...",err)
    }
})
file.on('close', () => console.log("文件关闭"))
