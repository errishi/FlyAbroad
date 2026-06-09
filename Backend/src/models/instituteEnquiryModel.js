import mongoose from "mongoose";

const instituteEnquirySchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    message: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const instituteEnquiryModel = mongoose.models.InstituteEnquiry || new mongoose.model("InstituteEnquiry", instituteEnquirySchema);

export default instituteEnquiryModel;