// 引入fs
const fs = require('fs')
// 
const process = require('process')

// 方法一
// 创建流式读取对象
// let rf = fs.createReadStream(`./00封面.jpg`)
// // 创建流式写入对象
// let ws = fs.createWriteStream('./00封面-1.jpg')
// rf.on('data',data=>{
//     ws.write(data)
// })
// rf.on('end',()=>{
//     console.log('复制完毕');
// })
// console.log(process.memoryUsage());

// 方法二  通过先读取全部的数据 再进行全部写入一次性   比较浪费内存
let data = fs.readFileSync('./00封面.jpg')
fs.writeFileSync('./00封面-2.jpg',data)
console.log(process.memoryUsage());   //rss为占用内存大小