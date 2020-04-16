

function getCurrentTime() {
    const time = new Date();
    return time.toLocaleString();
}
// console.log("idiididid",module.id)
// console.log("其他模块fileName",module.filename)
// console.log("sc,mns,nc",module.loaded)
console.log("其他模块的parent",module.parent)

module.exports = getCurrentTime;
