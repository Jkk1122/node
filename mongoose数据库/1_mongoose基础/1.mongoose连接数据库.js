// 1.下载mongoose
// 2.导入mongoose
const mongoose = require('mongoose')

// 3.连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// 4.连接成功回调 on/once  on在意外断开时会重复连接  once只会连接执行一次
mongoose.connection.once('open',()=>{
    console.log('连接成功');
})
// 连接失败回调
mongoose.connection.once('error',()=>{
    console.log('连接失败');
})
// 连接断开
mongoose.connection.once('close',()=>{
    console.log('连接断开');
})