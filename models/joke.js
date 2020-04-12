const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    type: String,
    setup: String,
    punchline: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Joke', jokeSchema);