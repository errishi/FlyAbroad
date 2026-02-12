import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true, unique: true
    },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    isLoggedIn: { type: Boolean, default: false },
    verificationToken: { type: String, default: null },
    otp: { type: String, default: null },
    otpExpiration: { type: Date, default: null },



}, { Timestamp: true })

export const User = mongoose.model('User', userSchema)                                                                          