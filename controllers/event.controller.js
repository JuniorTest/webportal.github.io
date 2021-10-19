const model = require('../models/Common')
const { validationResult } = require('express-validator');
const Event = model.events

const getPagination = (page, size) => {
    const limit = size ? +size : 3
    const offset = page ? page * limit : 0

    return { limit, offset }
}

// GET list registed user
exports.list = async (req, res) => {
    const eventId = req.params.id
    const { page, size } = req.query
    const { limit, offset } = getPagination(page, size)

    try {
        const events = await Event.paginate({ event_id: eventId }, { offset, limit })
        res.json(events)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
}

// GET find by email
exports.findByEmail = async (req, res) => {
    const { email, page, size } = req.query
    const { limit, offset } = getPagination(page, size)
    try {
        const userEvent = await Event.paginate({ email: email }, { offset, limit })
        if (!userEvent)
            res.status(404).send({ msg: 'Not Found' })
        
        res.json(userEvent)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
}

// POST register for Event A
exports.registeredUserEventA = async (req, res) => {
    const event_id = 1
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, event_name } = req.body

    try {
        const newEventUser = new Event({
            firstname, lastname, email, event_name, event_id
        })

        const event = await newEventUser.save()
        res.json(event)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

// POST register for Event B
exports.registeredUserEventB = async (req, res) => {
    const event_id = 2
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, event_name } = req.body

    try {
        const newEventUser = new Event({
            firstname, lastname, email, event_name, event_id
        })

        const event = await newEventUser.save()
        res.json(event)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

// PUT update User Event A
exports.updateUserEventA = async (req, res) => {
    const { firstname, lastname, email, event_name } = req.body

    const fields = {}

    if (firstname) fields.firstname = firstname
    if (lastname) fields.lastname = lastname
    if (email) fields.email = email
    if (event_name) fields.event_name = event_name

    try {
        let event = await Event.findById(req.params.id)

        if (!event)
            return res.status(404).json({ msg: 'User Event not found' })

        event = await Event.findByIdAndUpdate(req.params.id, { $set: fields }, { new: true });
        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

// PUT update User Event B
exports.updateUserEventB = async (req, res) => {
    const { firstname, lastname, email, event_name } = req.body

    const fields = {}

    if (firstname) fields.firstname = firstname
    if (lastname) fields.lastname = lastname
    if (email) fields.email = email
    if (event_name) fields.event_name = event_name

    try {
        let event = await Event.findById(req.params.id)

        if (!event)
            return res.status(404).json({ msg: 'User Event not found' })

        event = await Event.findByIdAndUpdate(req.params.id, { $set: fields }, { new: true });
        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

// DELETE unsubscribe user
exports.unsubscribeUser = async (req, res) => {
    try {
        let eventUser = await Event.findById(req.params.id)

        if (!eventUser)
            return res.status(404).json({ msg: 'User not found' })

        await Event.findByIdAndRemove(req.params.id)
        res.json({ msg: 'Event User removed' })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}