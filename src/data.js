// Define some book data
var bookData = [{
                    id: 22,
                    name: "test book 1",
                    author: 25
                },
                {
                    id: 45,
                    name: "test book 2",
                    author: 445
                }];


// Define some author data
var authorData = [
    {
        id: 25,
        name: "John Doe"
    },
    {
        id: 45,
        name: "Max Tester"
    }
];                

// Public functions for other modules to use
exports.getAllBooks = function() 
{
    return bookData;
}

exports.getById = function(id)
{
    return bookData.filter(function(book){
        if(book.id == id)
        {
            return book;
        }
    });
}

exports.getAuthors = function()
{
    return authorData;
}