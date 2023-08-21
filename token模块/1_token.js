const jwt = require('jsonwebtoken')

// 生成token
let token = jwt.sign({
    username:'zhangsan',
    age:19
},'jiaxinke',{
    expiresIn:60  // 单位为秒
})

console.log(token);

// 验证token
jwt.verify(token,'jiaxinke',(err,data)=>{
    if(err){
        console.log('校验失败');
    }else{
        console.log(data);
    }
})
