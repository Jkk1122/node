const mongoose = require('mongoose')
const MovieModel = require('./models/MovieModel')
const db = require('./db/db')

db(()=>{
    console.log('连接成功');

    MovieModel.create({
        name:'肖申克的救赎',
        director:'贾新科'
    }).then(value=>{
        console.log('新增成功',value);
        mongoose.disconnect()
    },reason=>{
        console.log('新增失败');
    })
},()=>{})