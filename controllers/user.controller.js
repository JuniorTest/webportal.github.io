const model = require('../models/Common')
const { validationResult } = require('express-validator');
const User = model.users
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')

exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ mgs: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch && !(user.isAdmin)) {
            return res.status(400).json({ mgs: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 36000
        }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
}