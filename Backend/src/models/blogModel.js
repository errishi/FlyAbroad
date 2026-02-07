import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    content: {
        type: Array,
        default: [],
        required: true
    },
    author: {
        type: Object,
        default: {
            name: {
                type: String,
                required: true,
            },
            role: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
        },
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
        default: Date.now(),
    },
    image: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        default: [
            "All Articles",
            "Visa & Immigration",
            "Scholarships",
            "Test Preparation",
            "Application Tips",
            "Pre-Departure",
            "Study Destinations"
        ]
    }
});

const blogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default blogModel;