// 引入fs
const fs = require('fs')
// __dirname 与 require 类似，都是 Node.js 环境中的'全局'变量
let data = fs.readFileSync(__dirname+'/00封面.jpg')
console.log(data);


// 使用 fs 模块的时候，尽量使用 __dirname 将路径转化为绝对路径，这样可以避免相对路径产生的Bug