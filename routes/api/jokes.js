const express = require('express');
const router = express.Router();
const jokesCtrl = require('../../controllers/jokes');

router.get('/', jokesCtrl.index);
router.get('/:id', jokesCtrl.show);


module.exports = router;