var data = require('../src/data');
var express = require('express');
var router = express.Router();

//
// implement functionality
//

function getAuthors(req,res,next)
{
    res.json(data.getAuthors());
}

//
// Declare routes
//

router.route('/authors')
    .get(getAuthors);    

module.exports = router;