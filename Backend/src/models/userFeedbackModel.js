import mongoose from "mongoose";

const userFeedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
},{timestamps: true});

const userFeedbackModel = mongoose.models.UserFeedback || mongoose.model("UserFeedback", userFeedbackSchema);

export default userFeedbackModel;