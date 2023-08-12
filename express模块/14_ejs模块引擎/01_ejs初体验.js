// 引入
const ejs = require('ejs')
const fs = require('fs')
const express = require('express')
//创建实例
const app = express()

// 变量设置
let strs = ['我','爱','你','中','国']
let htmlStr =  fs.readFileSync('./01_test.html').toString()

//使用ejs渲染
let result = ejs.render(htmlStr,{strs})
console.log(result);

app.get('/home',(req,res)=>{
    res.send(result);
})

app.listen(3000,()=>{
    console.log('3000监听中......');
})