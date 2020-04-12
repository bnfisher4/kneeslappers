const express = require('express');
const router = express.Router();
const jokesCtrl = require('../../controllers/jokes');

router.get('/', jokesCtrl.index);


module.exports = router;