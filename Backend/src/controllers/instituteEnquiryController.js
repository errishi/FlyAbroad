import instituteEnquiryModel from "../models/instituteEnquiryModel.js";

export const allInstituteEnquiry = async (req,res) => {
    try {
        // apply pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;

        // calculate the documents that db skip
        const skip = (page - 1) * limit;

        // query to optimize performance
        const [instituteEnquiry, totalInstituteEnquiry] = await Promise.all([
            instituteEnquiryModel.find()
            .select('firstName lastName institution country')
            .sort({createdAt: -1})
            .skip(skip)
            .limit(limit)
            .lean(),
            instituteEnquiryModel.countDocuments()
        ]);

        const totalPages = Math.ceil(totalInstituteEnquiry / limit);

        res.status(200).json({
            success: true,
            metadata: {
                totalInstituteEnquiry,
                totalPages,
                currentPage: page,
                itemPerPage: limit,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            },
            data: instituteEnquiry
        });
    } catch (error) {
        console.error("Error fetching university: ", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching enquiries."
        });
    }
}

export const enquiryViewDetails = async (req,res) => {
    try {
        const { id } = req.params;
        const instituteData = await instituteEnquiryModel.findOne({ _id: id }).lean();

        if(!instituteData){
            return res.status(404).json({
                success: false,
                message: "Enquiry data not found"
            });
        }

        res.status(200).json({
            success: true,
            data: instituteData
        });
    } catch (error) {
        console.error("Error fetching enquiry details: ", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching the details."
        });
    }
}

export const newInstituteEnquiry = async(req,res) => {
    try {
        const { firstName, lastName, country, institution, email, message } = req.body;

        if(!firstName || !lastName || !country || !institution || !email || !message){
            return res.status(400).json({
                success: false,
                message: "Please provide all the required field"
            });
        }

        const newEnquiry = await instituteEnquiryModel.create({
            firstName: firstName,
            lastName: lastName,
            country: country,
            institution: institution,
            email: email,
            message: message
        });

        res.status(201).json({
            success: true,
            message: "Application submitted successfully!",
            inquiryId: newEnquiry._id
        })
    } catch (error) {
        console.error("POST /inquiries error:", error);
        
        // Catch Mongoose schema validation errors gracefully
        if (error.name === 'ValidationError') {
            return res.status(400).json({ success: false, message: error.message });
        }

        res.status(500).json({ success: false, message: "Internal server error" });
    }
}