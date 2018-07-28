

const Book = mongoose.model({
    Title: {
        type: string,
        require: true,
        minlength: 1,
        trim: true
    },
    Author: {
        type: string,
        require: true,
        minlength: 1,
        trim: true
    },
    Description: {
        type: string, 
        trim: true
    }
})

module.exports = Book