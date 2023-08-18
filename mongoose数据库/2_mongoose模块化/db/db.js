// success 成功的回调
// error  失败的回调

module.exports = function (success,error) {
    const {DBHOST,DBPOST,DATABASE} = require('../config/config')
    // 1.下载mongoose
    // 2.导入mongoose
    const mongoose = require('mongoose')
    // 3.连接数据库
    mongoose.connect(`mongodb://${DBHOST}:${DBPOST}/${DATABASE}`)
    // 4.连接成功回调 on/once  on在意外断开时会重复连接  once只会连接执行一次
    mongoose.connection.once('open', () => {
        success()
    })
    // 连接失败回调
    mongoose.connection.once('error', () => {
        error()
    })
    // 连接断开
    mongoose.connection.once('close', () => {
        console.log('连接断开');
    })
}