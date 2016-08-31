var express = require('express');
var router = express.Router();

var bookData = [{name: "test book 1",
            author: 25},
            {name: "test book 2",
            author: 445}];

function getAllBooks(req,res,next)
{
    res.json(bookData);
}

function newBook(req,res,next)
{
    res.sendStatus(200);
}

router.route('/books')
    .get(getAllBooks)
    .post(newBook);


router.route('/books/:id')
    .get(function(req,res,next){
        
        console.log(req.params);
        res.send("request book id " + req.params.id);
    })
    .post(function(req,res,next){
        res.send("post books");
    })
    .delete(function(req,res,next){
        res.send("delete books");
    });

 

module.exports = router;