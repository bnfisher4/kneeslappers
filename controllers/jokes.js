const Joke = require('../models/joke');

module.exports = {
    index
}

async function index(req, res) {
    const jokes = await Joke.find({});
    res.status(200).json(jokes);
}