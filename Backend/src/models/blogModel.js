import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    excerpt: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: [String],
        default: [],
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    readTime: {
        type: String,
        default: "8 min read",
    },
    publishDate: {
        type: Date,
        default: Date.now,
    },
    // --- CLOUDINARY IMAGE FIX ---
    image: {
        url: {
            type: String,
            required: true
        },
        filename: { 
            type: String, 
            required: true // Cloudinary returns this as the 'public_id' or 'filename'
        }
    },
    tags: {
        type: [String],
        enum: [
            "All Articles",
            "Visa & Immigration",
            "Scholarships",
            "Test Preparation",
            "Application Tips",
            "Pre-Departure",
            "Study Destinations"
        ]
    }
},{ timestamps: true });

const blogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default blogModel;