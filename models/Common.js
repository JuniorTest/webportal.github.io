const config = require('config')
const url = config.get('mongoURI')

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose
db.url = url
db.events = require('./Event')(mongoose, mongoosePaginate)
db.users = require('./User')(mongoose)

module.exports = db