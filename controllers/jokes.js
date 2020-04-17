const Joke = require('../models/joke');
const User = require('../models/user');

module.exports = {
    index,
    create
}

async function index(req, res) {
    const jokes = await Joke.find({});
    res.status(200).json(jokes);
}

async function create(req, res) {
    try {
        const joke = await Joke.create(req.body);
        joke.favoritedBy.push(req.user_id);
        await joke.save()
        res.status(200).json(joke)
    } catch (err) {
        console.log(err)
    }
}