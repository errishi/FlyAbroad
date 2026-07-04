import careerModel from "../models/careerModel.js"

export const getAllApplication = async (req,res) => {
    try {
        const [allApplication, totalApplication] = await Promise.all([
            careerModel.find()
            .select('fullName positionApplied')
            .sort({createdAt: -1})
            .lean(),

            careerModel.countDocuments()
        ]);

        res.status(200).json({
            success: true,
            metadata: {
                totalApplication
            },
            data: allApplication
        });
    } catch (error) {
        console.error("Error fetching applications: ", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching applications."
        });
    }
}

export const viewApplicationDetails = async(req,res) => {
    try {
        const { id } = req.params;
        const openApplication = await careerModel.findById({ _id: id }).lean();

        if(!openApplication){
            return res.status(404).json({
                success: false,
                message: "Application not found"
            });
        }

        res.status(200).json({
            success: true,
            data: openApplication
        });
    } catch (error) {
        console.error("Error fetching applications: ", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching application."
        });
    }
}

export const createNewApplication = async(req,res) => {
    try {
        const cv = req.file;

        if(!cv){
            return res.status(400).json({ 
                success: false,
                message: "Please upload a valid Resume/CV (PDF, DOC, or DOCX)." 
            });
        }

        const { fullName, email, mobileNumber, positionApplied, message } = req.body;

        if(!fullName || !email || !mobileNumber || !positionApplied || !message){
            return res.status(400).json({
                success: false,
                message: "Please provide the required field"
            });
        }

        const newApplication = await careerModel.create({
            fullName,
            email,
            mobileNumber,
            positionApplied,
            resumeCV: cv,
            message
        });

        res.status(201).json({
            success: true,
            message: "Application submitted successfully! Our HR team will review your profile.",
            university: newApplication
        });
    } catch (error) {
        console.error("Error submitting application:", error);
        
        // Handle Mongoose validation errors (e.g., missing fields or invalid email format)
        if (error.name === 'ValidationError') {
            return res.status(400).json({ 
                success: false, 
                message: Object.values(error.errors).map(val => val.message).join(', ') 
            });
        }

        // Generic server error
        res.status(500).json({ 
            success: false, 
            message: "Server error while submitting application", 
            error: error.message 
        });
    }
}