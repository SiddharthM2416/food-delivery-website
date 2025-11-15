const mongoose = require("mongoose")
require('dotenv').config();
const MONGOOSE = process.env.MONGOOSE
const connectDB = async () => {
    try{
        await mongoose.connect(MONGOOSE)
        console.log("DB Connected")
    } catch(error) {
        console.log("DB connection faile : ",error.message);
        process.exit(1)
    }
}

module.exports = {connectDB}