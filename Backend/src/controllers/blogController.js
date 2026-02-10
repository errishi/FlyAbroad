import blogModel from "../models/blogModel.js";

const allBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find({});
        res.status(200).json({success: true, data: blogs});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Something went wrong"});
    }
}

const readBlog = async (req ,res) => {
    let { id } = req.params;
    try {
        const blog = await blogModel.findById(id);
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