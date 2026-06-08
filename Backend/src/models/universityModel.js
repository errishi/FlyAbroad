import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        enum: ["Bachelor's", "Master's", "PhD", "Associate", "Certificate", "Diploma"],
        required: true
    },
    durationInYears: {
        type: Number,
        required: true
    },
    tuitionFee: {
        amount: { type: Number, required: true },
        currency: { type: String, required: true }
    }
});

const universitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
        index: true
    },
    categories: [{
        type: String,
        required: true
    }],
    tags: [{
        type: String,
        required: true
    }],
    image: {
        type: String,
        required: true
    },
    costLevel: {
        type: String,
        enum: ['low', 'medium', 'high'],
        lowercase: true,
        required: true
    },
    safetyLevel: {
        type: String,
        enum: ['low', 'medium', 'high'],
        lowercase: true
    },
    worldRanking: {
        type: Number,
        required: true
    },
    founded: {
        type: Number,
        required: true
    },
    studentPopulation: {
        type: Number,
        required: true
    },
    internationalStudents: {
        type: Number,
        required: true
    },
    universityType: {
        type: String,
        enum: ['Public University', 'Private University', 'Community College'],
        required: true
    },
    programsOfferedCount: {
        type: Number,
        required: true,
        default: 0
    },
    applicationDeadline: {
        type: Date,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    campusLife: {
        type: String,
        required: true
    },
    facilities: [{
        type: String,
        required: true
    }],
    availablePrograms: [programSchema]
}, { timestamps: true });

const universityModel = mongoose.models.Universities || mongoose.model("Universities", universitySchema);

export default universityModel;