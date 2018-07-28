const mongoose = require('./mongoose')

const Book = mongoose.model('Book', {
    Title: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    Author: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    Description: {
        type: String, 
        trim: true
    }
})

var newBook = new Book({
    Title: "Test book",
    Description: "test description",
    Author: "Brajesh jaishwal"
})

//newBook.save()

module.exports = Book