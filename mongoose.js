const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost.27017/BookStore'

mongoose.connect(dbUrl, () => {
    "data base is runnong "
})