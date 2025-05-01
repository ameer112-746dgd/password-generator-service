const express = require('express');
const router = express.Router();
const { generatePassword } = require('../controllers/passwordController');

router.get('/', generatePassword);

module.exports = router;
