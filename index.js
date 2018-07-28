const express = require('express')
const HttpStatus = require('http-status-codes')
var Book = require('./model')

const port = process.env.PORT || 3000

const app = new express();

app.get('/', (req, res) => {
    res.send("Welcome to the book store")
})

app.get('/Books', (req, res) => {
    Book.find()
    .then((error, data) => {
        if(error)
        {
            res.status(HttpStatus.NOT_FOUND).send({message: "There is not books right now."})
        }
        else
            res.send(data)
    })
    .catch(error => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({error})
    })
})
app.get('/Books:id', (req, res) => {
    Book.findById(res.id)
    .then((error, data) => {
        if(error)
        {
            res.status(HttpStatus.NOT_FOUND).send({message: "book not found."})
        }
        else
            res.send(data)
    })
    .catch(error => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({error})
    })
})

app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})