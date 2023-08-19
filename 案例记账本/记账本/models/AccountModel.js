// 导入
const mongoose = require('mongoose')

// 创建文档结构对象
let AccountSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    time:Date,
    type:{
        type: Number,
        default:-1
    },
    account:{
        type:String
    },
    remarks:{
        type:String
    }
})

// 创建文档模拟对象
let AccountModel = mongoose.model('account',AccountSchema)

module.exports = AccountModel