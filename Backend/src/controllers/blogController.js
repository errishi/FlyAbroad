// import blogModel from "../models/blogModel.js";

const allBlogs = async (req, res) => {
    res.send("All blogs");
}

const readBlog = async (req ,res) => {
    res.send("Read blog");
}

export { allBlogs, readBlog };