import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected successfully...");
    } catch (error) {
        console.log("Error connecting to DB!");
    }
}

export default connectDB;