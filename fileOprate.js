const fs = require('fs');


function tConsole(err, data, errText = "执行失败", succText="执行成功") {
    if(err){
        console.log(errText, err)
    }else {
        console.log(succText, data)
    }

}

const ofd = fs.openSync('./info.js','r+')

// 修改文件目录的读写权限 
// fs.chmod('./buf.js','0740', err => tConsole(err, '', '修改权限失败', '修改权限成功'))
// fs.fchmod(ofd,'0745', err => tConsole(err, '', '修改权限失败1', '修改权限成功1'))

// 修改文件名
// fs.rename('./message.js','./input.txt', err => tConsole(err, '', '修改文件名失败', '修改文件名称成功'))

// 创建硬连接
// fs.link('./input.txt','./input/message.txt', err => tConsole(err, ''))
// 删除硬链接
// fs.unlink('./message.txt', err => tConsole(err, ''))

// 创建、查看符号链接
// fs.symlink('./info.js','./input/info.js','file', err => tConsole(err,'','创建链接失败','创建链接成功'))
// fs.readlink('./input/info.js','utf8',(err, linkString) => tConsole(err,linkString))

//文件截取 truncate() 、 truncateSync() 、 ftruncate() 、ftruncateSync()
// fs.truncate('./info.js',100, err=> tConsole(err, ''))

// 监视文件或目录
// fs.watchFile('./info.js',(curr, prev) => {
//     console.log("监听到该文件发生变化了",curr.mtime, prev.atime)
// })
// const watcher = fs.watch('./info.js',(event,filename) => {
//     console.log("文件监听返回时间类型", event)
//     console.log("文件名是", filename)
// })

// watcher.close()


// 获取文件或目录的绝对路径
// fs.realpath('./buf.js',(err, rpath) => {
//     tConsole(err, rpath)
// })

// 修改文件访问时间及修改时间
// fs.utimes('./buf.js',new Date(), new Date(), (err) => {
//     tConsole(err, '','修改时间失败','修改时间成功')
// })
// fs.futimes(ofd, new Date(), new Date(), err => {
//     tConsole(err,'','修改时间失败','修改时间成功')
// })


// 查看文件或目录是否存在
// if(!fs.existsSync('./well')){
//     console.log("该文件目录不存在")
// }


// 查看文件或目录的信息

// fs.stat('./input/hello/test_h',(err, stats) => {
//     if(!err){
//         console.log("返回的信息是什么样的",stats.isDirectory())
//         // console.log("返回的信息是什么样的",stats)
//     }else {
//         console.log("查看文件信息失败")
//     }
// })

// fs.lstat('./input/info.js',(err, stats) => {
//     tConsole(err, stats, 'lstat查看文件目录信息失败', 'lstat查看文件目录信息')
// })



// 目录的操作

// fs.mkdir('./input/hello',{recursive: true},(err) => {
//     if(!err) console.log("创建目录成功啦")
//     else console.log("创建目录失败！")
// })
// fs.readdir('./input',(err, file) => {
//     if(!err) console.log("读取目录成功", file)
// })
// const rrfile = fs.readdirSync('./input')
// console.log("同步读取目录返回内容",rrfile)


// 文件的操作

// fs.readFile('./input.txt', 'utf8', (err, data) => {
//     if(err){ 
//         console.log("读取文件失败")
//     }else {
//         console.log("读取的文件内容", data)
//     }
    
// })

// fs.open('./input.txt', 'a', (err, fd) => {
//     if(!err){
//         const readBuf = Buffer.alloc(200);
//         fs.read(fd, readBuf, 0, 20, 3, (err, bytesRead, buffer) => {
//             console.log("从指定位置读取文件内容", bytesRead, buffer.slice(0, bytesRead).toString())
//             fs.read(fd, readBuf, 30, 12, null, (err, bytesRead, buf) => {
//                 console.log("接着读取的文件内容",bytesRead, buf.toString())
//             })
//         } )
//         const writeBuf = Buffer.from("我现在好饿");
//         fs.write(fd,writeBuf, 6, 9, 20, (err, write,buf) => {
//             if(err){
//                 console.log("写入文件失败",err)
//             }else {
//                 console.log("写入文件成功")
//             }
//         })

//         // 在关闭文件之前对文件进行同步操作，即将内存缓冲区中的剩余数据全部写入文件
//         fs.fsync(fd,(err => {
//             if(err){
//                 console.log("同步数据失败")
//             }
//         }))
//         fs.close(fd, err => {
//             if(err){
//                 console.log("关闭文件失败")
//             }else {
//                 console.log("成功关闭文件")
//             }
//         });
        
//     }

// })

// const fdd = fs.openSync('./input.txt','a')
// console.log("同步打开文件的内容....",fdd)

// fs.fstat(fdd, (err, stats) => {
//     tConsole(err, stats)
// })

// const cs = fs.readFileSync('./input.txt','utf8')
// console.log("同步读取的内容:", cs)

// fs.writeFile('./input.txt',"\r今天是2020年4月14,星期二",{encoding:'utf8',flag:'a'},(err) => {
//     if(err){
//         console.log("写入文件失败")
//     }else {
//         console.log("写入文件成功啦")
//     }
// })

// fs.writeFileSync('./input.txt','\r同步方式写入文件的内容',{flag:'a'})

// fs.appendFile('./input.txt','\r向文件中插入内容',{flag:'a'},(err) => {
//     if(err){
//         console.log("插入内容失败")
//     }else {
//         console.log("插入文件成功")
//     }
// })

// fs.appendFileSync('./input.txt','\r使用同步方式想文件中插入内容',{flag: 'a'});