const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
    const SECRET_KEY = config.get('jwtSecret')
    let token = req.headers['x-auth-token'] || req.headers['authorization']

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' })
    }

    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length)
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        req.user = decoded.user
        next()
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' })
    }
}