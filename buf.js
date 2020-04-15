

const str = "我爱编程";
const buf = Buffer.from(str);
console.log(str.length, buf.length)
console.log(Buffer.isBuffer(buf))
console.log(Buffer.isEncoding('ascii'))
const bufalloc = Buffer.alloc(10,'我爱编程','utf-8')
console.log(bufalloc.toString())