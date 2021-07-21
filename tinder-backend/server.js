const express = require('express')
const mongoose = require('mongoose')
const Card = require('./models/Card.js')


// App Config
const app = express()
const port = process.env.PORT || 8000

// Middlewares

// DB Config
mongoose.connect('mongodb://localhost/tinderDB', {
    usenewURLParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
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

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => {
    console.log(`Listening on local host: ${port}`)
})