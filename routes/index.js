var express = require('express');
var router = express.Router();
var db = require('../db/db');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: '首页'
    });
});


// 保存
router.get('/save', function (req, res, next) {
     
    db.add('fxp', function() {
        res.send({
            code: '200',
            data: {
                name: 'fxp'
            }
        });
    });
    res.send({
        code: '200',
        data: {
            name: 'fxp'
        }
    });
    
});

// 查询
router.get('/getUser', function (req, res, next) {
   /* User.find(function (err, data) {
        res.rend({
            code: '200',
            data: data
        });
    });*/
});

module.exports = router;
