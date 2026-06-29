import mongoose from "mongoose";

const cloudinaryFileSchema = new mongoose.Schema({
    url: { 
        type: String, 
        default: null 
    },
    filename: { 
        type: String, 
        default: null // Stores the Cloudinary public_id for easy deletion/updates
    }
}, { _id: false }); // Prevents Mongoose from creating a separate ID for every single file

const applicationSchema = new mongoose.Schema({
    // --- Personal Information ---
    firstName: { 
        type: String, 
        required: [true, 'First name is required'], 
        trim: true 
    },
    lastName: { 
        type: String, 
        required: [true, 'Last name is required'], 
        trim: true 
    },
    email: { 
        type: String, 
        required: [true, 'Email is required'], 
        unique: true, 
        lowercase: true, 
        trim: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: { 
        type: String, 
        required: [true, 'Phone number is required'] ,
        required: true
    },
    dateOfBirth: { 
        type: Date, 
        required: true 
    },
    nationality: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: String, required: true },

    // --- Education Background ---
    highestQualification: { 
        type: String, 
        required: true 
    },
    institutionName: { 
        type: String, 
        required: true 
    },
    fieldOfStudy: { 
        type: String, 
        required: true 
    },
    graduationYear: { 
        type: Number, 
        required: true 
    },
    gpa: { 
        type: String,
        required: true 
    },

    // --- Program Selection ---
    preferredCountry: { 
        type: String, 
        required: true 
    },
    preferredUniversity: { 
        type: String, 
        required: true 
    },
    preferredCourse: { 
        type: String, 
        required: true 
    },
    intakeMonth: { 
        type: String, // e.g., "Fall 2026", "September"
        required: true 
    },

    // --- English Proficiency ---
    englishTest: { 
        type: String,
        enum: ['IELTS', 'TOEFL', 'PTE', 'Duolingo', 'None'], // Standardizing the test types
        default: 'None'
    },
    testScore: { type: String },
    testDate: { type: Date },

    // --- Documents (Storing URLs) ---
    documents: {
        passport: { 
            type: cloudinaryFileSchema,
            default: () => ({}) // Initializes empty object with null url/filename
        },
        transcript: { 
            type: cloudinaryFileSchema,
            default: () => ({})
        },
        englishTestResult: { 
            type: cloudinaryFileSchema,
            default: () => ({})
        },
        recommendationLetter: { 
            type: cloudinaryFileSchema,
            default: () => ({})
        },
        sop: { 
            type: cloudinaryFileSchema,
            default: () => ({})
        }
    },

    // --- Internal Tracking (Optional but recommended) ---
    applicationStatus: {
        type: String,
        enum: ['Lead', 'Documents Pending', 'Under Review', 'Submitted to University', 'Accepted', 'Rejected'],
        default: 'Lead'
    }

}, { 
    timestamps: true
});

const applicationModel = mongoose.models.Applications || mongoose.model("Applications", applicationSchema);

export default applicationModel;