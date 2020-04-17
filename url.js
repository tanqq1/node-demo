
const url = require("url");
const { pathToFileURL, fileURLToPath } = url;


const myUrl = new URL('http:Example.com:5412?name="hello"&age="20"', 'https://example.org/');
console.log("我的地址......",myUrl)

const urlParams = new URLSearchParams(myUrl.searchParams)
urlParams.append('time','14')
urlParams.delete('name')
urlParams.set('data','12')
console.log("urlParams......",urlParams)
console.log("urlParams......",urlParams.entries())
console.log("urlParams......",urlParams.get('age'))
console.log("urlParams......",urlParams.has('age'))
console.log("urlParams......",urlParams.keys())

console.log("正常路径是",__filename)
console.log("pathToFileURL......",pathToFileURL(__filename))
console.log("fileURLToPath......",fileURLToPath('file:///G:/code/node-demo/url.js'))