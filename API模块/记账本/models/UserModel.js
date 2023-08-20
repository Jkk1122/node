const mongoose = require('mongoose')

// 创建结构对象
const UserSchema = mongoose.Schema({
    username:String,
    password:String
})

// 创建模拟对象
const UserModel = mongoose.model('user',UserSchema)

module.exports = UserModel