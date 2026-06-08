import universityModel from "../models/universityModel.js"

export const allUniversity = async(req,res) =>{
    try {
        // apply pagination feature
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;

        // calculate documents that db skip
        const skip = (page - 1) * limit;

        // query to optimize performance
        const [universities, totalUniversity] = await Promise.all([
            universityModel.find()
            .select('universityCode name city country image worldRanking overview studentPopulation universityType programsOfferedCount')
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