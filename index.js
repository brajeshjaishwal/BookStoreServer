const express = require('express')

const serverPort = process.env.PORT || 4000

const app = new express();

app.get('/', (req, res) => {
    res.send("Welcome to the book store")
})

app.get('/Book:id', () => {

})

app.listen(serverPort, () => {
    console.log(`server is listening on ${serverPort}`)
})