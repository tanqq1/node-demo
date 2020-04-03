
const os = require('os');


function add (){
    // console.log("export<odule",module)
    console.log("用户系统:::",os.userInfo().username)
}

exports.add =  add;
// module.exports = add;
