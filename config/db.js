const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URI).then(() => console.log('connected to mongo database with', mongoose.connection.host)).catch((err) => console.log('found error while connecting to mongo database', err));
}

module.exports = connectDB;