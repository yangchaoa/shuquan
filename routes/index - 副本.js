var express = require('express');
var router = express.Router();

var mysql=require('mysql');
var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'baobei'
})

/* GET home page. */
router.post('/v', function(req, res, next) {
  var q=(req.body.id-1)*2;
  console.log(q)
  res.header('Access-Control-Allow-Origin','*')
    pool.query(`SELECT * FROM list LIMIT ${q},2`,function (err,rows,fileds) {
        res.send(rows)
    })
});

module.exports = router;
