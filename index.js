const express = require('express')
const mongoose = require('mongoose')
const { ObjectID } = require('mongodb')
const HttpStatus = require('http-status-codes')
const bodyParser = require('body-parser')
var Book = require('./model')

const port = process.env.PORT || 3000

const app = new express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({type: 'application/json'}))

app.get('/', (req, res) => {
    res.send("Welcome to the book store")
})

app.get('/Books', (req, res) => {
    Book.find()
    .then((books) => {
        res.send(books)
    },(error) => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({error})
    })
})

app.get('/Books/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id))
    {
        res.status(200).send({message: "id is not valid"})
    }
    else {
        Book.findById(req.params.id)
        .then((book) => 
            res.send(book)
        ), (error) => {
            res.status(HttpStatus.NOT_FOUND).send({message: 'not found'})
        }
    }
})

app.post('/Books', (req, res) => {
    var book = new Book(req.body)
    book.save()
    .then((book) => {
        res.status(HttpStatus.CREATED).send(book)
    }, (error) => {
        res.status(400).send({message: error})
    })
})

app.delete('/Books', (req,res) => {
    Book.findByIdAndRemove(req.params.id)
    .then((book) => {
        res.send(book)
    }, (error) => {
        res.status(400).send({message: error})
    })
})

app.put('/Books', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then((book) => {
            res.status(200).send(book)
        }, (error) => {
            res.status(404).send({message: error})
        }
    )
})

app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})

module.exports = app