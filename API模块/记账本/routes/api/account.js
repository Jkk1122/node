var express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const AccountModel = require('../../models/AccountModel');
const moment = require('moment')
 
const adapter = new FileSync(__dirname +'/../../data/db.json')
const db = low(adapter)

// 获取全部账单接口
router.get('/account', function(req, res, next) {

  // 数据库获取数据
  AccountModel.find().sort({type:-1}).then(value=>{
    res.json({
        code:'0000',
        msg:'查询成功~~',
        data:value
    })
  },reason=>{
    res.json({
        code:'1001',
        msg:'查询失败~~',
        data:null
    })
  })
});

// 创建账单接口
router.post('/account',(req,res)=>{
  // 提交数据
  // 对时间数据进行处理  转换为data格式  使用moment插件
  AccountModel.create({...req.body,time:moment(req.body.time).toDate()}).then(value=>{
    res.json({
        code:'0000',
        msg:'创建成功~~',
        data:value
    })
  },reason=>{
    res.json({
        code:'1002',
        msg:'查询失败~~',
        data:null
    })
  })
})

// 删除账单接口
router.delete('/account/:id',(req,res)=>{
  // 获取params的id
  let id = req.params.id
  // 数据库删除数据
  AccountModel.deleteOne({_id:id}).then(value=>{
    res.json({
        code:'0000',
        msg:'创建成功~~',
        data:null
    })
  },reason=>{
    res.json({
        code:'1003',
        msg:'删除失败',
        data:null
    })
  })
})
// 获取单条账单接口
router.get('/account/:id',(req,res)=>{
    // 获取id
    let {id} = req.params
    AccountModel.findById({_id:id}).then(
        value=>{
            res.json({
                code:'0000',
                msg:'获取成功~~',
                data:value
            })
          },
          reason=>{
            res.json({
                code:'1004',
                msg:'获取失败',
                data:null
            })
          }
    )
})
// 更新账单接口
router.patch('/account/:id',(req,res)=>{
    // 获取id
    let {id} = req.params
    AccountModel.updateOne({_id:id},req.body).then(
        value=>{
            AccountModel.findById({_id:id}).then(value=>{
                res.json({
                    code:'0000',
                    msg:'更新成功~~',
                    data:value
                })
            },reason=>{
                res.json({
                    code:'1004',
                    msg:'查询失败',
                    data:null
                })
            })
          },
          reason=>{
            res.json({
                code:'1005',
                msg:'更新失败',
                data:null
            })
          }
    )
})

module.exports = router;
