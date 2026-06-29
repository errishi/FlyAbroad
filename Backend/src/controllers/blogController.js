import blogModel from "../models/blogModel.js";

/** 
 * @desc    Get all blogs
 * @route   GET /api/blogs
 * @access  Public
 */
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
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
}

/** 
 * @desc    Read a single blog
 * @route   GET /api/blogs/:id
 * @access  Public
 */
const readBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await blogModel.findOne({ _id: id }).lean();
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.status(200).json({ success: true, data: blog });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
}

/** 
 * @desc    Create a new blog
 * @route   POST /api/blogs
 * @access  Private
 */
const createNewBlog = async (req, res) => {
    try {
        const image = req.file;
        const { title, excerpt, content, category, readTime, tags } = req.body;

        if (!image) {
            return res.status(404).json({
                success: false,
                message: "Please upload image of the blog."
            });
        }

        if (!title || !excerpt || !content || !category || !readTime || !tags) {
            return res.status(400).json({
                success: false,
                message: "Please provide all the required field."
            });
        }

        const uploadedImage = {
            url: req.file.path,
            filename: req.file.filename
        }

        const newBlog = await blogModel.create({
            title: title,
            excerpt: excerpt,
            content: content,
            category: category,
            readTime: readTime,
            tags: tags,
            image: uploadedImage
        });

        res.status(201).json({
            success: true,
            message: "New blog posted successfully.",
            blogId: newBlog._id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}

/**
 * @desc    Delete a listed blog by ID
 * @route   DELETE /api/blogs/:id
 * @access  Private
 */

const deleteListedBlogById = async(req,res) => {
    try {
        const { id } = req.params;

        const deleteBlog = await blogModel.findByIdAndDelete({ _id: id });
        if(!deleteBlog){
            return res.status(404).json({
                success: false,
                message: "Blog not found!"
            });
        }

        res.status(200).json({
            success: true,
            message: "Blog deleted successfully."
        });
    } catch (error) {
        console.error("Error deleting blog.", error);

        res.status(500).json({
            success: false,
            message: "Something went wrong while deleting the blog."
        });
    }
}

/** 
 * @desc    Edit a listed blog by ID
 * @route   PUT /api/blogs/:id
 * @access  Private
 */

// const editListedBlog = async(req,res) => {
//     try {
//         const { id } = req.params;
//         // update object dynamically based on what the sent
//         const updatedBlog = { ...req.body };

//         const existingBlog = await blogModel.findById(id);
//         if(!existingBlog){
//             return res.status(404).json({
//                 success: false,
//                 message: "Blog not found."
//             });
//         }

//         // PARSE the stringified arrays
//         if (tags && typeof tags === 'string') {
//             tags = JSON.parse(tags);
//         }
//         if (content && typeof content === 'string') {
//             content = JSON.parse(content);
//         }

//         const updatedBlog = {
//             title,
//             excerpt,
//             content,
//             category,
//             readTime,
//             tags,
//         };

//         if(req.file){
//             updatedBlog.image = {
//                 url: req.file.path,
//                 filename: req.file.filename
//             }
//         }

//         // update blog in db in single call
//         const update
//     } catch (error) {
        
//     }
// }

export { allBlogs, readBlog, createNewBlog, deleteListedBlogById };