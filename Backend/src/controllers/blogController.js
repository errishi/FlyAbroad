import blogModel from "../models/blogModel.js";

const allBlogs = async (req, res) => {
    try {
        // pagination feature
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = Math.max(1, parseInt(req.query.limit) || 12);

        // calculate documents that db return
        const skip = (page - 1) * limit;

        // query to optimize performance
        const [blogs, totalBlogs] = await Promise.all([
            blogModel.find()
            .select('title category image excerpt author readTime')
            .skip(skip)
            .limit(limit)
            .lean(),

            blogModel.countDocuments()
        ]);

        const totalPages = Math.ceil(totalBlogs / limit);

        res.status(200).json({
            success: true, 
            metadata: {
                totalItems: totalBlogs,
                totalPages,
                currentPage: page,
                itemPerPage: limit,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            },
            data: blogs
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Something went wrong"});
    }
}

const readBlog = async (req ,res) => {
    try {
        const { id } = req.params;
        const blog = await blogModel.findOne({_id: id}).lean();
        if(!blog){
            return res.status(404).json({success: false, message: "Blog not found"});
        }
        res.status(200).json({success: true, data: blog});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Something went wrong"});
    }
}

export { allBlogs, readBlog };