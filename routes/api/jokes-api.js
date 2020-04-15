const router = require('express').Router();
const request = require('request');
const API_KEY = process.env.API_KEY;



router.get('/', function (req, res) {
    const options = {
        method: 'GET',
        url: 'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/' + req.query.type,
        headers: {
            'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
            'x-rapidapi-key': API_KEY
        }
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(body);
    });
});


module.exports = router;