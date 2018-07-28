const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const dbport = process.config.MONGODB_URL || 'mongodb://localhost.27017/BookStore'

mongoose.connect(databaseurl, () => {
    "data base is runnong "
})