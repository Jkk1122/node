// 导入db
const db = require('./db/db')
// mongoose
const mongoose = require('mongoose')
// BookModel
const BookModel = require('./models/BookModel')

db(()=>{
    console.log('连接成功');
    // 7. 新增
    BookModel.create({
        name:'孔乙己',
        author:'鲁迅',
        price:19.99,
    }).then(value=>{
        console.log('新增成功',value);
        mongoose.disconnect()
    },reason=>{
        console.log('新增失败',reason);
    })
},()=>{
    console.log('连接失败');
})