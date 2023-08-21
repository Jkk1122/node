var express = require('express');
var router = express.Router();
const moment = require('moment')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
// 导入
const UserModel = require('../../models/UserModel')
// 登录
router.post('/login',(req,res)=>{
    // token验证
    let {username,password} = req.body
    UserModel.findOne({username:username,password:md5(password)}).then(value=>{
        if(value){
            let token = jwt.sign({
                username:value.username,
                password:value.password
            },'jiaxinke',{
                expiresIn:6000  //s
            })     
            console.log(token);
            res.json({
                code:'0000',
                msg:'验证成功',
                data:token
            })
        }else{
            res.json({
                code:'2001',
                mag:'用户名或密码错误',
                data:null
            })
        }
    },reason=>{
        res.json({
            code:'2002',
            mag:'校验失败',
            data:null
        })
    })
})
// 退出登录
router.post('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.render('success',{msg:'退出成功',url:'/login'})
    })
})


module.exports = router;
