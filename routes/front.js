var express = require('express');
var router = express.Router();

/* GET front page. */
router.get('/', function(req, res, next) {
  res.render('front', { title: '前端'});
});

module.exports = router;
