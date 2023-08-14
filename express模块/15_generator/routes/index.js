var express = require('express');
var router = express.Router();
const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 返回渲染表单页面
router.get('/portrait', (req, res)=>{
  res.render('portrait');
});
// 返回提交成功后的页面
router.post('/portrait', (req, res)=>{
  // 创建form对象
  const form = formidable({
    multiples:true,
    // 设置上传文件的保存目录
    uploadDir:__dirname + '/../public/images',
    // 保存文件后缀
    keepExtensions:true
  });
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(fields);  //存储一般字段， text radio checkbox select   
    console.log(files);   //文件

    // 服务器保存图片的url
    let url = '/images/' + files.filename.newFilename  // 存储在数据库中
    res.send(url);
  });
});


module.exports = router;
