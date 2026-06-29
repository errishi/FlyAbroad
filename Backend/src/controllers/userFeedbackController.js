import userFeedbackModel from "../models/userFeedbackModel.js"

export const allFeedback = async (req, res) => {
    try {
        const feedbackData = await userFeedbackModel.find().lean();

        if (!feedbackData) {
            return res.status(404).json({
                success: false,
                message: "Feedback data not found"
            });
        }

        res.status(200).json({
            success: true,
            data: feedbackData
        });
    } catch (error) {
        console.error("Error occured: ", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching the details."
        })
    }
}

// POST /api/user-feedback
// Protected route: Only logged-in users can submit feedback

export const newFeedback = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(404).json({
                success: false,
                message: "Title and description are required."
            });
        }

        //**
        // Create the feedback
        // We get the user ID from the middleware (req.user), NOT from the frontend body. */

        const newTestimonial = userFeedbackModel({
            user: req.user._id,
            title,
            description
        });

        await newTestimonial.save();    //save into db

        res.status(201).json({
            message: "Feedback submitted successfully!",
            feedback: newTestimonial
        });
    } catch (error) {
        console.error("Feedback Post Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while submitting feedback."
        });
    }
}