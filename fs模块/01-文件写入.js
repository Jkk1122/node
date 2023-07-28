// 1.引入fs模块
const fs = require('fs')
// 2.文件异步写入writeFile
// 有四个参数
//  文件名 | 内容数据 | [可选参数配置] | 回调函数
// 回调函数  写入成功返回null  写入失败返回 失败对象
fs.writeFile('./来物.txt','你就像天外来物一样',err=>{
    if(err){
        console.log('写入失败');
        return
    }else{
        console.log(err);
        console.log('写入成功');
    }
})
// 3.writeFileSync 同步写入
// 参数为 文件名 | 内容数据 | [可选参数配置] 

try{
    fs.writeFileSync('./来物.txt','我开始找你了');
    // 写不上的原因是  异步结果会覆盖同步结果
    }catch(e){
    console.log(e);
    }
    
// Node.js中的磁盘操作是由其他线程完成的，结果的处理有两种模式：
// 同步处理 JavaScript 主线程会等待 其他线程的执行结果，然后再继续执行主线程的代码，
// 同步效率较低
// 异步处理 JavaScript 主线程不会等待 其他线程的执行结果，直接执行后续的主线程代码，
// 异步效率较高