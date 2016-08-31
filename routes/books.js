var express = require('express');
var router = express.Router();

router.route('/')
    .get(function(req,res,next){
        res.send("get books");
    })
    .post(function(req,res,next){
        res.send("post books");
    })
    .delete(function(req,res,next){
        res.send("delete books");
    });

  

module.exports = router;