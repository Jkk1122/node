// 引入fs
const fs = require('fs')
// 读取文件名
let name = fs.readdirSync('./fs模块')
name.forEach((item)=>{
    let newName = item.split('-')
    if(newName[0] < 10){
        newName[0] = `0${newName[0]}`
        // 更改文件名
        fs.renameSync(`./fs模块/${item}`,`./fs模块/${newName[0] + '-' + newName[1]}`)
    }
})