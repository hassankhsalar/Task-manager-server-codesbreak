const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("mongodb Connected");
    } catch (err) {
        console.error("error connecting to mongoDB", err);
        process.exit(1);
    }
};

module.exports = connectDB;