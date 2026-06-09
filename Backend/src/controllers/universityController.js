import universityModel from "../models/universityModel.js"

export const allUniversity = async (req, res) => {
    try {
        // apply pagination feature
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;

        // calculate documents that db skip
        const skip = (page - 1) * limit;

        // query to optimize performance
        const [universities, totalUniversity] = await Promise.all([
            universityModel.find()
                .select('name city country image worldRanking overview studentPopulation universityType programsOfferedCount')
                .skip(skip)
                .limit(limit)
                .lean(),    //return plain js object
            universityModel.countDocuments()
        ]);

        const totalPages = Math.ceil(totalUniversity / limit);

        res.status(200).json({
            success: true,
            metadata: {
                totalUniversity,
                totalPages,
                currentPage: page,
                itemPerPage: limit,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            },
            data: universities
        });
    } catch (error) {
        console.error("Error fetching university: ", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching universities."
        });
    }
}

export const universityViewDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const university = await universityModel.findOne({ _id: id }).lean();

        if (!university) {
            return res.status(404).json({
                success: false,
                message: "University not found"
            });
        }

        res.status(200).json({
            success: true,
            data: university
        });
    } catch (error) {
        console.error("Error fetching university details: ", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching the details."
        });
    }
}

export const newUniversityListing = async (req, res) => {
    try {
        const image = req.file;
        // 1. Ensure the image was successfully uploaded to Cloudinary
        if (!image) {
            return res.status(400).json({ 
                success: false,
                message: "University cover image is required." 
            });
        }

        // 2. Extract standard text and number fields from the request body
        const {
            name, city, region, country, costLevel, safetyLevel,
            worldRanking, founded, studentPopulation, internationalStudents,
            universityType, applicationDeadline, overview, campusLife
        } = req.body;

        // 3. Handle Arrays/Objects coming from FormData
        // We must parse them back into arrays before saving to MongoDB.

        const categories = req.body.categories ? JSON.parse(req.body.categories) : [];
        const tags = req.body.tags ? JSON.parse(req.body.tags) : [];
        const facilities = req.body.facilities ? JSON.parse(req.body.facilities) : [];
        const availablePrograms = req.body.availablePrograms ? JSON.parse(req.body.availablePrograms) : [];

        // 4. Create the new University document
        const newUniversity = new University({
            name,
            city,
            region,
            country,
            costLevel,
            safetyLevel,
            worldRanking,
            founded,
            studentPopulation,
            internationalStudents,
            universityType,
            applicationDeadline,
            overview,
            campusLife,
            categories,
            tags,
            facilities,
            availablePrograms,
            // Map the Cloudinary data correctly according to your schema
            image: {
                url: req.file.path,
                filename: req.file.filename
            }
        });

        // 5. Save to the database
        await newUniversity.save();

        // 6. Return success response
        res.status(201).json({
            message: "University added successfully!",
            university: newUniversity
        });

    } catch (error) {
        console.error("Error creating university:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};