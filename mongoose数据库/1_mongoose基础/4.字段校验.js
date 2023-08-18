// 1.下载mongoose
// 2.导入mongoose
const mongoose = require('mongoose')

// 3.连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// 4.连接成功回调 on/once  on在意外断开时会重复连接  once只会连接执行一次
mongoose.connection.once('open',()=>{
    console.log('连接成功');
    // 5.创建文档结构对象
    let BookSchema = new mongoose.Schema({
        name:{
            type:String,
            require:true,
            unique:true
        },
        author:{
            type:String,
            default:'匿名'
        },
        style:{
            type:String,
            enum:['小说','戏剧']
        },
        price:Number,
        is_Hot:Boolean,
        main:Array,
        pub_time:Date,
        test:mongoose.Schema.Types.Mixed
    })
    // 6.创建文档模拟对象
    let BookModel = mongoose.model('books',BookSchema)

    // 7. 新增
    BookModel.create({
        name:'兄弟',
        author:'余华',
        style:'小说',
        price:19.99,
        is_Hot:true,
        main:['伤心','富贵','黄牛'],
        pub_time: new Date(),
        test:['史铁生','莫言','余华']
    }).then(value=>{
        console.log('新增成功',value);
        mongoose.disconnect()
    },reason=>{
        console.log('新增失败',reason);
    })

})
// 连接失败回调
mongoose.connection.once('error',()=>{
    console.log('连接失败');
})
// 连接断开
mongoose.connection.once('close',()=>{
    console.log('连接断开');
})