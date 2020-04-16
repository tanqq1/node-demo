// const Buffer  = require('Buffer');

//初始化Buffer实例
//Buffer.from()
//Buffer.alloc()

//想缓冲区中写入数据
//Buffer.write()

//像缓冲区中读取数据
// Buffer.toString()

//缓冲区合并
//Buffer.concat()

//拷贝缓冲区,将buf1拷贝到targetBuffer的targetStart位置
//实则是用targetBuffer的sourceStart位置（不包含）~ sourceEnd位置（包含）的数据替换targetBuffer中相对应位置的数据
// buf1.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])

//缓冲区裁剪 Buffer.slice()
//缓冲区长度  Buffer.length()


const bf1 = Buffer.from('helloffffffffff','ascii');

const bf2 = Buffer.alloc(300);

const bf3 = Buffer.from([0x1, 0x2, 0x3]);

const buf4 = Buffer.concat([bf1,bf2,bf3]);

bf3.write('djvljoojk');

bf2.write("123456789abccdefghigklmnopqrstuvwxyz")
bf1.write('whatCanIDoForYou');

bf1.copy(bf2,10,4,10);

//
// console.log(bf1.toString('utf8'));
// console.log(bf1.toString('base64'));
// console.log(bf1.toString('binary'));
// console.log(bf1.toString('hex'));
//
// console.log("bf2 JSONStringfy:",JSON.stringify(bf2));
// console.log("bf22222......",bf2.toString('utf8'));
// console.log("bf33333......",bf3);
// console.log("buf4444444......",buf4);

//缓冲区裁剪，返回一个新的缓冲区，但是指向同一块内存

const bufSlice = Buffer.alloc(20);
const str = 'kmld fmlkd nckjn jkkk！'
bufSlice.write(str);
console.log("19920",Buffer.byteLength(bufSlice), str.length)
const bufs = bufSlice.slice(3,8);
console.log(bufs.toString('utf8')); //is is
bufs.write('qing');
console.log(bufs.toString('utf8')) //qings
console.log(bufSlice.toString()) // thqings a new year!
console.log(bufs.length,bufSlice.length)

console.log("比较",bufSlice.compare(bufs))
console.log("比较",bufs.compare(bufSlice))