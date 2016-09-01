var data = require('../src/data');
var express = require('express');
var router = express.Router();

//
// implement functionality
//

function getAllBooks(req,res,next)
{
    res.json(data.getAllBooks());
}

function postNewBook(req,res,next)
{
    // post parameters are available through req.body    
    res.sendStatus(200);
}


//
// Declare routes
//

router.route('/books')
    .get(getAllBooks)
    .post(postNewBook);

router.route('/books/:id')
    .get(function(req,res,next){
        // the id parameter is available at req.params        
        res.json(data.getById(req.params.id));                
    })    
    .delete(function(req,res,next){
        res.send("delete book");
    });

module.exports = router;