// 引入fs模块
const fs = require('fs')
// readFile 异步读取
// 三个参数  文件路径 | [可选参数] | 回调函数
// 返回值为 undefined
fs.readFile('./时间都去哪儿了.txt',(err,data)=>{
    if(err){
        console.log('读取失败');
    }else{
        // 读取的data为buffer对象
        console.log(data);
        // 将二进制数转换为字符串
        console.log(data.toString());
    }
})
// readFileSync 同步读取
// 两个参数  文件路径 | [可选参数]
// utf-8编码方式
let data = fs.readFileSync('./天外来物.txt','utf-8')
console.log(data);
let data1 = fs.readFileSync('./天外来物.txt')
console.log(data1);