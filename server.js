const express = require('express')
const connectDB = require('./config/db')

const app = express()

connectDB()

app.use(express.json({ extended: false }))

app.use('/api/events', require('./routes/event.routes'))
app.use('/api/users', require('./routes/user.routes'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})