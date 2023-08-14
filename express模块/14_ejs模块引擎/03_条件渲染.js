const ejs = require('ejs')
const fs = require('fs')
let isLogin = true

// 渲染
let html = fs.readFileSync('./03_条件.html').toString()
let result = ejs.render(html,{isLogin}) 
console.log(result);