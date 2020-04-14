const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    type: String,
    setup: String,
    punchline: String,
    favoritedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Joke', jokeSchema);