// 导入
const ejs  = require('ejs')
const fs = require('fs')
const express = require('express')

// 创建实例
const app = express()

// 数据
let strs = ['唐僧','沙悟净','孙悟空','猪悟能']

//渲染函数
// 参数
let htmlStr = fs.readFileSync('./02_列表.html').toString()
// 渲染
let result = ejs.render(htmlStr,{strs})
console.log(result);
app.get('/home',(req,res)=>{
    res.send(result)
})
app.listen(3000,()=>{
    console.log('3000开启监听.....');
})