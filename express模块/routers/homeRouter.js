const express = require('express')

const router = express.Router()

router.get('/home',(req,res)=>{
    res.send('首页展示')
})
router.get('/search',(req,res)=>{
    res.send('首页搜索')
})

// 暴露
module.exports = router