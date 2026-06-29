import applicationModel from "../models/applicationModel.js";

export const newApplicationForm = async (req, res) => {
    try {
        const { 
            firstName, lastName, email, phone, dateOfBirth, nationality, 
            address, city, country, postalCode, highestQualification, 
            institutionName, fieldOfStudy, graduationYear, gpa, 
            preferredCountry, preferredUniversity, preferredCourse, 
            intakeMonth, englishTest, testScore, testDate 
        } = req.body;

        if (!firstName || !lastName || !email || !phone || !dateOfBirth || !nationality || 
            !address || !city || !country || !postalCode || !highestQualification || 
            !institutionName || !fieldOfStudy || !graduationYear || !gpa || 
            !preferredCountry || !preferredUniversity || !preferredCourse || 
            !intakeMonth || !englishTest || !testScore || !testDate) {
            
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields."
            });
        }

        const getFileData = (fileArray) => {
            if (fileArray && fileArray.length > 0) {
                return {
                    url: fileArray[0].path,       
                    filename: fileArray[0].filename 
                };
            }
            return { url: null, filename: null };
        };

        const newApplication = await applicationModel.create({
            firstName,
            lastName,
            email,
            phone,
            dateOfBirth,
            nationality,
            address,
            city,
            country,
            postalCode,
            highestQualification,
            institutionName,
            fieldOfStudy,
            graduationYear,
            gpa,
            preferredCountry,
            preferredUniversity,
            preferredCourse,
            intakeMonth,
            englishTest,
            testScore,
            testDate,
            applicationStatus: 'Lead', // Default status for new applications
            
            documents: {
                passport: getFileData(req.files?.passport),
                transcript: getFileData(req.files?.transcript),
                englishTestResult: getFileData(req.files?.englishTestResult),
                recommendationLetter: getFileData(req.files?.recommendationLetter),
                sop: getFileData(req.files?.sop)
            }
        });

        return res.status(201).json({
            success: true,
            message: "Application submitted successfully.",
            applicationId: newApplication._id
        });

    } catch (error) {
        console.error("Error submitting application:", error);
        
        // Check for MongoDB duplicate email error (code 11000)
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "An application with this email already exists."
            });
        }

        return res.status(500).json({
            success: false,
            message: "An internal server error occurred while processing your application."
        });
    }
};

export const getAllApplicationForms = async(req,res) => {
    try {
        const [applications, totalApplication] = await Promise.all([
            applicationModel.find()
            .select(' firstName lastName highestQualification preferredCountry preferredUniversity preferredCourse applicationStatus ')
            .sort({ createAt: -1 })
            .lean(),

            applicationModel.countDocuments()
        ]);

        res.status(200).json({
            success: true,
            data: applications,
            totalApplication
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An internal server error occurred while processing your application."
        });
    }
};

export const viewApplicationById = async(req,res) => {
    try {
        const { applicationId } = req.params;
        const isApplicationExist = await applicationModel.findById(applicationId).lean();

        if(!isApplicationExist){
            return res.status(400).json({
                success: false,
                message: "application not found"
            });
        }

        res.status(200).json({
            success: true,
            data: isApplicationExist
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An internal server error occurred while fetching application."
        });
    }
};

export const updateApplicationStatusByApplicationId = async(req,res) => {
    try {
        const { applicationId } = req.params;
        const { applicationStatus } = req.body;
        
        if(!applicationStatus){
            return res.status(400).json({
                success: false,
                message: "application status not found"
            });
        }
        
        const updatedApplication = await applicationModel.findByIdAndUpdate(
            applicationId, 
            { applicationStatus: applicationStatus },
            { 
                new: true,           // Returns the updated document
                runValidators: true  // Validates the new status against your Schema Enums
            } 
        );

        if(!updatedApplication){
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }

        res.status(200).json({
            success: true,
            message: "Application updated successfully."
        });
    } catch (error) {
        if (error.name === 'CastError' || error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        return res.status(500).json({
            success: false,
            message: "An internal server error occurred while updating application status."
        });
    }
};

export const deleteApplicationByApplicationId = async(req,res) => {
    try {
        const { applicationId } = req.params;

        const isApplicationExist = await applicationModel.findById(applicationId);
        if(!isApplicationExist){
            return res.status(400).json({
                success: false,
                message: "application not found"
            });
        }

        await applicationModel.findByIdAndDelete(applicationId);

        res.status(200).json({
            success: true,
            message: `Application deleted successfully.`
        });
    } catch (error) {
        if (error.name === 'CastError' || error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
};
