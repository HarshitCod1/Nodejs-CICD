const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

// Handlers must be functions, NOT invoked here!
router.get('/', usersController.getUsers);
router.post('/', usersController.createUser);
router.get('/:id', usersController.getUserById);

module.exports = router;
