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
    duration: {
        type: String,
        required: true
    },
    tuitionFee: {
        type: String,
        required: true
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
    // --- CLOUDINARY IMAGE INTEGRATION ---
    image: {
        url: {
            type: String,
            required: true
        },
        filename: {
            type: String,
            required: true // Cloudinary 'public_id' or filename
        }
    },
    // ------------------------------------
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
        enum: [
            "Public University",
            "Private University",
            "Public Institute",
            "Private Institute",
            "Community College",
            "Polytechnic",
            "Institute of Technology",
            "Academy"
        ],
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