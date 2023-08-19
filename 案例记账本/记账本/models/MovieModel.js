const mongoose = require('mongoose')

// 创建文档结构对象
let MovieSchema = new mongoose.Schema({
    name:String,
    director:String
})

// 创建文档模型对象
let MovieModel = mongoose.model('movie',MovieSchema)

//暴露
module.exports = MovieModel