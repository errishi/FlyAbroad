import studentEnquiryModel from "../models/studentEnquiryModel.js";

export const allStudentEnquiry = async (req,res) => {
    try {
        // apply pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;

        // calculate the documents that db skip
        const skip = (page - 1) * limit;

        // query to optimize performance
        const [studentEnquiries, totalStudentEnquiries] = await Promise.all([
            studentEnquiryModel.find()
            .select('fullName countryOfResidence courseOfInterest')
            .sort({ createdAt: -1 })        //sort to see admin, the newest enquiry
            .skip(skip)
            .limit(limit)
            .lean(),
            studentEnquiryModel.countDocuments()
        ]);

        const totalPages = Math.ceil(totalStudentEnquiries / limit);

        res.status(200).json({
            success: true,
            metadata: {
                totalEnquiries: totalStudentEnquiries,
                totalPages,
                currentPage: page,
                itemPerPage: limit,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            },
            data: studentEnquiries
        });
    } catch (error) {
        console.error("Error in enquiry fetching: ", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching enquiries."
        });
    }
}

export const detailStudentEnquiryView = async (req,res) => {
    try {
        const { id } = req.params;

        const data = await studentEnquiryModel.findOne({ _id: id }).lean();

        if(!data){
            return res.status(404).json({
                success: false,
                message: "Enquiry not found"
            });
        }

        res.status(200).json({
            success: true,
            data: data
        })
    } catch (error) {
        console.error("Error fetching student enquiry details: ", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching the details."
        });
    }
}

export const newStudentEnquiry = async(req,res) => {
    try {
        const { fullName, countryOfResidence, courseOfInterest, mobileNumber, email } = req.body;

        if(!fullName || !countryOfResidence || !courseOfInterest || !mobileNumber || !email){
            return res.status(400).json({
                success: false,
                message: "Please provide all required field"
            });
        }

        const newEnquiry = await studentEnquiryModel.create({
            fullName: fullName,
            countryOfResidence: countryOfResidence,
            courseOfInterest: courseOfInterest,
            mobileNumber: mobileNumber,
            email: email
        });

        res.status(201).json({
            success: true,
            message: "Application submitted successfully!",
            inquiryId: newEnquiry._id
        });
    } catch (error) {
        console.error("POST /inquiries error:", error);
        
        // Catch Mongoose schema validation errors gracefully
        if (error.name === 'ValidationError') {
            return res.status(400).json({ success: false, message: error.message });
        }

        res.status(500).json({ success: false, message: "Internal server error" });
    }
}