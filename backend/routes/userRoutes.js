const express = require('express');
const router = express.Router();
const userController = require('../backend/controllers/userController');

router.post('/', userController.createUser);
module.exports = router;