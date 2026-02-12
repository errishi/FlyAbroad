import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/unefly`);
        console.log("Database is connected successfully...");
    } catch (error) {
        console.log("Error connecting to DB!");
    }
}

export default connectDB;