const User = require('../models/user');


module.exports = {
    signup
};

async function signup(req, res) {
    const user = new User(req.body);
    try {
        console.log(user);
    } catch (err) {
        res.status(400).json(err);
    }
}