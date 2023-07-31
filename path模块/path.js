// 引入path模块
const path = require('path')

//拼接规范的绝对路径
// const a = path.resolve(__dirname,'./index.html)
const a = path.resolve(__dirname,'index.html')
console.log(a);
// 注意不能补充 /index.html  会被认定为绝对路径
const b = path.resolve(__dirname,'/index.html','./test')
console.log(b);     // 输出为：  D:\index.html\test


// path.sep
// 获取操作系统的路径分隔符
console.log(path.sep);     //windows为  \ Linux为  /

// path.parse
// 解析路径并返回对象
let str = __filename
console.log(str);   //  D:\GITSPACE\NODE\node\path模块\path.js
console.log(path.parse(str));

// path.basename  获取路径的基础名称
console.log(path.basename(str));

// path.dirname  获取路径的目录名
console.log(path.dirname(str));

// path.extname    获取路径的扩展名
console.log(path.extname(str));