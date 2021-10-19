const express = require('express')
const { check } = require('express-validator');
const event = require('../controllers/event.controller')
const router = express.Router()

router.get('/', event.list)
router.post('/', [
    check('firstname', 'First Name required').not().isEmpty(),
    check('lastname', 'Last Name required').not().isEmpty(),
    check('email', 'Email Name required').not().isEmpty()
], event.registeredUser)
router.delete('/:id', event.unsubscribeUser)

module.exports = router