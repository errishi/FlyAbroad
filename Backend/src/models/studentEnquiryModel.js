import mongoose from "mongoose";

const studentEnquirySchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    countryOfResidence: {
        type: String,
        required: true
    },
    courseOfInterest: {
        type: String,
        required: true
    },
    mobileNumber: {
        countryCode: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const studentEnquiryModel = mongoose.models.StudentEnquiry || mongoose.model("StudentEnquiry", studentEnquirySchema);

export default studentEnquiryModel;