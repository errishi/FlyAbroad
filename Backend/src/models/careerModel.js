import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    mobileNumber: {
        type: String,
        required: true
    },
    positionApplied: {
        type: String,
        required: true
    },
    resumeCV: {
        url: {
            type: String,
            required: true
        },
        filename: {
            type: String,
            required: true // Cloudinary returns this as the 'public_id' or 'filename'
        }
    },
    message: {
        type: String
    }
}, {timestamps: true});

const careerModel = mongoose.models.Career || new mongoose.model("Career", careerSchema);

export default careerModel;