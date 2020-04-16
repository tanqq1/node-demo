const path = require('path');

console.log("路径规范",path.normalize(__filename))

// join方法将参数值字符串结合为一个路径字符串
console.log("join....",path.join(__dirname, '/timer.js'))

// path.resolve()  以应用程序根目录为起点，根据所有的参数值字符串解析出一个绝对路径
console.log("resolve....",path.resolve('/foo/bar', '/tmp/file/'))  //   以/开头表示一个绝对路径

// console.log("evenPath",process.env.PATH.split(path.delimiter))

// 系统环境变量
// process.env.PATH 
// path.delimiter  路径定界分隔符   windows; POSIX :
console.log("定界符....",path.delimiter)

// 提供各平台特定的路径片段分隔符，
console.log("分隔符....",path.sep)

// 返回from到to的相对路径
// path.relative(from, to)
console.log("相对路径.....",path.relative('/hello/test/hello.js','/hello/test/test/hello.js'))
// 用于获取一个路径中的目录名
// path.dirname()
console.log("dirname......",path.dirname(__filename))
// 获取路径中的文件名
// path.basename()
console.log("basename",path.basename(__filename))
// 获取文件中的扩展名
// path.extname()
console.log('extname:',path.extname(__filename))
// 判断路径是否为绝对路径
console.log("是否绝对路径",path.isAbsolute('./info.js'))

// 从对象返回路径字符串
console.log("format",path.format({
    root: __dirname,
    base:'/path.js'
}))

// 返回对象，与format相对
console.log("parse....",path.parse(__filename))

// path.win32
// console.log("-------",path.win32)

console.log("=======",path.toNamespacedPath(__filename))