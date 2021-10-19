const db = require('../models/Common')

const connectDB = async() => {
    try {
        await db.mongoose.connect(db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1)
    }
}

module.exports = connectDB