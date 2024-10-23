const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');1

router.post('/', userController.createUser);
module.exports = router;