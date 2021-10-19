const connectDB = require('./config/db')
const bcrypt = require('bcryptjs')
const model = require('./models/Common')
const User = model.users

connectDB()

const users = [
    {
        name: 'Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    }
]

const importData = async () => {
    try {
        await User.deleteMany()
        await User.insertMany(users)

        console.log('Data Imported!')
        process.exit()
    } catch (err) {
        console.error(`${err}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany()

        console.log('Data Destroyed!')
        process.exit()
    } catch (error) {
        console.error(`${err}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}