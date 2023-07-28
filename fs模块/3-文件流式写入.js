// 引入fs模块
const fs = require('fs')
// 文件流式写入createWriteStream
// 只有两个参数  文件路径 | [可选配置参数]
// 返回值为 Object
let wr = fs.createWriteStream('./时间都去哪儿了.txt')
console.log(typeof(wr));   //object

//流式写入
wr.write('门前老树长新芽\r\n');
wr.write('院里枯木又开花\r\n')
//结束写入
wr.end()

// 程序打开一个文件是需要消耗资源的 ，流式写入可以减少打开关闭文件的次数
// 流式写入方式适用于 大文件写入或者频繁写入 的场景, writeFile 适合于写入 频率较低 的场景
