const express = require('express');
const ctrl = require('../controllers/usersController');

const router = express.Router();

router.post('/', ctrl.create);
router.get('/', ctrl.list);
router.get('/:id', ctrl.get);

module.exports = router;
