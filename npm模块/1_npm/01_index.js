// 导入包
const uniq = require('uniq')
// 安装 uniq 之后， uniq 就是当前这个包的一个 依赖包 ，有时会简称为 依赖
// 数组
const arr = [1,2,3,4,5,5,5,3,3,3]

const result = uniq(arr)
console.log(result);