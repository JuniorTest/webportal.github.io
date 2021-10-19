const express = require('express')

const app = express()

app.use(express.json({ extended: false }))

app.use('/', (req, res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})