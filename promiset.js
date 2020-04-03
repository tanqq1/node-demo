


// promise 是用来管理异步的，本身不是异步的,本身会立即执行executor函数，只不过一般我们会在executor函数中处理一个异步操作
// const p = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log(1)
//     }, 1000)
//     console.log(2)
//     console.log(4)
// })
// console.log(3)

// 输出顺序 2 3 1

// new Promise(resolve => {
//     resolve(a)
//     // 由于a 没有定义,抛出异常,走then的err方法
// }).then(res => {
//     console.log("执行成功",res)
// }, err => {
//     console.log("执行失败",err)
//     // 没有返回异常也没有返回一个失败的promise实例,会继续走下一个then的res方法
// }).then(res2 => {
//     console.log("执行成功2222",res2)
// }, err => {
//     console.log("习性失败2222",err)
// })

// 执行失败 a is not defined
// 执行成功 undefined

// async await
// 只有await后面的promise返回的是resolve状态，才会吧结果返回，如果是reject状态，不仅不返回结果，之后的代码也不会执行

// const Promise = new Promise()
let p = Promise.reject(9)
async function ts(){
    await p;
    console.log("jabhjh")
}
ts()