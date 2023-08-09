function power1(){
    console.log('崩山击....');
}
function power2() {
    console.log('乌鸦坐飞机.....');
}

// 暴露方法1
// module.exports = {
//     power1,
//     power2
// }

// 暴露方法2
// exports.power1 = power1
// exports.power2 = power2

// module.exports可以暴露·任意·数据
// module.exports = 'iloveyou'
// module.exports = power1

// 不能使用 exports = value 的格式
exports = power1 
// exports = module.exports = {}  默认
// 上述读取为{}  require读取的为module.exports的值
// exports.name = value  将值赋给{} 存储的值module.exports可以读取到
