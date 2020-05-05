const mongoose = require("mongoose");
const db = process.env.MONGO_DB;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log('Mongodb connected')
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;