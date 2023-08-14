var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.send('有/test');
});
router.get('/', function(req, res, next) {
  res.send('没/test');
});


module.exports = router;
