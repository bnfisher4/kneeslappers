const Joke = require('../models/joke');

module.exports = {
    index,
    show
}

async function index(req, res) {
    const jokes = await Joke.find({});
    res.status(200).json(jokes);
}

async function show(req, res) {
    const joke = await Joke.findById(req.params.id);
    res.status(200).json(joke)
}