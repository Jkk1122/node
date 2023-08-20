var express = require('express');
var router = express.Router();
const moment = require('moment')
const md5 = require('md5')
// 导入
const UserModel = require('../../models/UserModel')
// 注册界面
router.get('/reg',(req,res)=>{
    res.render('auth/reg')
})
// 存数据
router.post('/reg',(req,res)=>{
    console.log(req.body);
    UserModel.create({...req.body,password:md5(req.body.password)})
    res.render('success',{msg:'注册成功',url:'/login'})
})
// 登录界面
router.get('/login',(req,res)=>{
    res.render('auth/login')
})
// 登录
router.post('/login',(req,res)=>{

    let {username,password} = req.body
    UserModel.findOne({username:username,password:md5(password)}).then(value=>{
        if(value){
            console.log(value);

            req.session.username = value.username
            req.session._id = value._id

            res.render('success',{msg:'登录成功',url:'/account'})     
        }else{
            res.status(505).send('登录失败~')
        }
    },reason=>{
        res.status(500).send('登录失败~~')
    })
})
// 退出登录
router.post('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.render('success',{msg:'退出成功',url:'/login'})
    })
})


module.exports = router;
