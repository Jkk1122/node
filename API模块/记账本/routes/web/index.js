var express = require('express');
var router = express.Router();
var nanoid = require('nanoid')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const AccountModel = require('../../models/AccountModel');
const moment = require('moment')
 
const adapter = new FileSync(__dirname +'/../../data/db.json')
const db = low(adapter)

// 账单页面
router.get('/', function(req, res, next) {
  // 获取账单信息
  // let lists = db.get('account').value()

  // 数据库获取数据
  AccountModel.find().sort({type:-1}).then(value=>{
    console.log('获取数据成功',value);
    res.render('list',{lists:value,moment:moment});
  },reason=>{
    console.log('获取数据失败',reason);
  })
});
// 创建账单页面
router.get('/create', function(req, res, next) {
  res.render('create');
});
// 表单数据提交位置
router.post('/',(req,res)=>{
  console.log(req.body);
  db.get('account').unshift({id:nanoid(),...req.body}).write()
  // 提交数据
  // 对时间数据进行处理  转换为data格式  使用moment插件
  AccountModel.create({...req.body,time:moment(req.body.time).toDate()}).then(value=>{
    console.log('添加成功',value);
  },reason=>{
    console.log('添加失败',reason);
  })
  // 成功提醒
  res.render('success',{msg:'添加成功了~~',url:'/account'})
})

// 删除数据
router.get('/:id',(req,res)=>{
  // 获取params的id
  let id = req.params.id
  console.log(id);
  // 根据id删除数据
  // db.get('account').remove({id:id}).write()
  // 数据库删除数据
  AccountModel.deleteOne({_id:id}).then(value=>{
    console.log('获取数据成功',value);
    res.render('list',{lists:value,moment:moment});
  },reason=>{
    console.log('获取数据失败',reason);
  })
  // 成功提醒
  res.render('success',{msg:'删除成功了~~',url:'/account'})
})

module.exports = router;
