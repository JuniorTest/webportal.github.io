const express = require('express')
const { check } = require('express-validator');
const user = require('../controllers/user.controller')
const router = express.Router()

router.get('/login', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], user.login)

module.exports = router