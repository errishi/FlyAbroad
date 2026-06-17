import universityModel from "../models/universityModel.js"

/** 
 * @desc    Get all universities with pagination
 * @route   GET /api/universities
 * @access  Public
 */
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

/** 
 * @desc    Get a single university by ID
 * @route   GET /api/universities/:id
 * @access  Public
 */

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

/** 
 * @desc    Create a new university listing
 * @route   POST /api/universities
 * @access  Private (Admin only)
 */

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

        if (!name || !city || !region || !country || !costLevel || !safetyLevel
            || !worldRanking || !founded || !studentPopulation || !internationalStudents ||
            !universityType || !applicationDeadline || !overview || !campusLife || !categories || !tags || !facilities || !availablePrograms) {
            return res.status(400).json({
                success: false,
                message: "Please provide required field!"
            });
        }

        // Map the Cloudinary data correctly according to your schema
        const uploadedImage = {
                url: req.file.path,
                filename: req.file.filename
            }

        // 4. Create the new University document
        const newUniversity = await universityModel.create({
            name: name,
            city: city,
            region: region,
            country: country,
            costLevel: costLevel,
            safetyLevel: safetyLevel,
            worldRanking: worldRanking,
            founded: founded,
            studentPopulation: studentPopulation,
            internationalStudents: internationalStudents,
            universityType: universityType,
            applicationDeadline: applicationDeadline,
            overview: overview,
            campusLife: campusLife,
            categories: categories,
            tags: tags,
            facilities: facilities,
            availablePrograms: availablePrograms,
            image: uploadedImage
        });

        // 6. Return success response
        res.status(201).json({
            success: true,
            message: "University added successfully!",
            university: newUniversity
        });

    } catch (error) {
        console.error("Error creating university:", error);

        // If it's a Mongoose validation error, send a 400 Bad Request
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: Object.values(error.errors).map(val => val.message).join(', ')
            });
        }

        // Otherwise, it's a generic server error
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

/**
 * @desc    Update an existing university listing
 * @route   PUT /api/universities/:id
 * @access  Private (Admin only)
 */

export const editListedUniversityById = async(req,res) => {
    try {
        const { id } = req.params;
        // update object dynamically based on what the sent
        const updatedData = {...req.body};

        // Safely parse arrays/objects only if they are included in this specific request
        const fieldsToParse = ['categories', 'tags', 'facilities', 'availablePrograms'];

        fieldsToParse.forEach((field) => {
            if(updatedData[field]){
                try {
                    updatedData[field] = JSON.parse(updatedData[field]);
                } catch (error) {
                    return res.status(400).json({
                        success: false,
                        message: `Invalid JSON format for field: ${field}`
                    });
                }
            }
        });

        if(req.file){
            updatedData.image = {
                url: req.file.path,
                filename: req.file.filename
            };
        };

        // update data into db
        const updatedUniversity = await universityModel.findByIdAndUpdate(
            id,
            { $set: updatedData },
            { new: true, $runValidators: true }
        );

        if(!updatedUniversity){
            return res.status(404).json({
                success: false,
                message: "University not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "University updated successfully.",
            university: updatedUniversity
        });
    } catch (error) {
        console.error("Error updating university:", error);

        // Handle Mongoose Validation Errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: Object.values(error.errors).map(val => val.message).join(', ')
            });
        }
        
        // Handle Invalid Mongoose Object IDs
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
             return res.status(400).json({
                success: false,
                message: "Invalid University ID format."
            });
        }

        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
}

/**
 * @desc    Delete a university listing by ID
 * @route   DELETE /api/universities/:id
 * @access  Private (Admin only)
 */

export const deleteListedUniversityById = async(req,res) => {
    try {
        const { id } = req.params;
        const deleteUniversity = await universityModel.findByIdAndDelete(id);

        if(!deleteUniversity){
            return res.status(400).json({
                success: false,
                message: "Invalid request, please check id."
            });
        }

        res.status(200).json({
            success: true,
            message: "University deleted successfully.",
        });
    } catch (error) {
        console.error("Error deleting university:", error);

        // Handle Mongoose Validation Errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: Object.values(error.errors).map(val => val.message).join(', ')
            });
        }
        
        // Handle Invalid Mongoose Object IDs
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
             return res.status(400).json({
                success: false,
                message: "Invalid University ID format."
            });
        }

        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
}