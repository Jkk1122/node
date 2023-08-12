const express = require('express')

const router = express.Router()

router.get('/admin',(req,res)=>{
    res.send('后台展示')
})
router.get('/setting',(req,res)=>{
    res.send('后台设置')
})
// 暴露
module.exports = router