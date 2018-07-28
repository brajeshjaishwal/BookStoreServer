const express = require('express')

const port = process.env.PORT || 3000

const app = new express();

app.get('/', (req, res) => {
    res.send("Welcome to the book store")
})

app.get('/Book:id', () => {

})

app.listen(serverPort, () => {
    console.log(`server is listening on ${port}`)
})