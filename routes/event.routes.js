const express = require('express')
const { check } = require('express-validator');
const event = require('../controllers/event.controller')
const auth = require('../middleware/auth')
const router = express.Router()

router.get('/statistic', auth, event.findByEmail)
router.get('/:id', event.list)
router.post('/eventA', [
    check('firstname', 'First Name required').not().isEmpty(),
    check('lastname', 'Last Name required').not().isEmpty(),
    check('email', 'Email Name required').not().isEmpty(),
    check('event_name', 'Work Home required').not().isEmpty()
], event.registeredUserEventA)
router.post('/eventB', [
    check('firstname', 'First Name required').not().isEmpty(),
    check('lastname', 'Last Name required').not().isEmpty(),
    check('email', 'Email Name required').not().isEmpty(),
    check('event_name', 'Hobbies required').not().isEmpty()
], event.registeredUserEventB)
router.put('/eventA/:id', auth, event.updateUserEventA)
router.put('/eventB/:id', auth, event.updateUserEventB)
router.delete('/:id', event.unsubscribeUser)

module.exports = router