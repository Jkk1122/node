// 导入模块
const main = require('./module')

console.log(main);

// 如果导入的路径是个文件夹，则会 首先 检测该文件夹下 package.json 文件中 main 属性对应
// 的文件，
// 如果存在则导入，反之如果文件不存在会报错。
// 如果 main 属性不存在，或者 package.json 不存在，则会尝试导入文件夹下的 index.js 和
// index.json ，
// 如果还是没找到，就会报错