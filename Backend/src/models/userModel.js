import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true, unique: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'super_admin'],
        default: 'user'
    },
    permissions:[{
        type:String,
        enum: [
            'manage_blog',
            'manage_universities',
            'manage_career',
            'manage_users',
            'manage_inquiries',
            'manage_reviews',
            'manage_events',
            'manage_testimonial_videos'
        ]
    }],
    
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    isLoggedIn: { type: Boolean, default: false },
    token: { type: String, default: null },
    otp: { type: String, default: null },
    otpExpiry: { type: Date, default: null },



}, { timestamps: true })

export const User = mongoose.model("User", userSchema)                                                                          