const mongoose = require('mongoose');

// card schema
const CardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

const Card = module.exports = mongoose.model('Card', CardSchema);