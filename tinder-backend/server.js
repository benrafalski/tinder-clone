const express = require('express')
const mongoose = require('mongoose')

// App Config
const app = express()
const port = process.env.PORT || 8000

// Middlewares

// DB Config
mongoose.connect('mongodb://localhost/tinderDB')
let db = mongoose.connection

// check db connection
db.once('open', () => {
    console.log('connected to MongoDB!')
})

// check for db errors
db.on('error', () => {
    console.log(err)
})

// API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('hello world')    
})

// Listener
app.listen(port, () => {
    console.log(`Listening on local host: ${port}`)
})