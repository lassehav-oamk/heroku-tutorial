
var express = require('express');
var books = require('./routes/books.js');
var app = express();

app.set('port', (process.env.PORT || 80));

app.use('/books', books);

app.get('/', function(req, res) {
    res.send("Hello world");

});


app.get('/tested', function(req, res) {
    res.send("Test world");

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
