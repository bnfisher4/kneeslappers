const express = require('express');
const router = express.Router();
const jokesCtrl = require('../../controllers/jokes');

router.get('/', jokesCtrl.index);
router.post('/', jokesCtrl.create);

router.use(require('../../config/auth'));
router.post('/', checkAuth, jokesCtrl.create);


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;