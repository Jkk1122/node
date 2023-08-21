const mongoose = require('mongoose')
// 5.创建文档结构对象
let BookSchema = new mongoose.Schema({
    name:String,
    author:String,
    price:Number
})
// 6.创建文档模拟对象
let BookModel = mongoose.model('books',BookSchema)
module.exports = BookModel