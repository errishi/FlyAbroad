import express from 'express';
import { allBlogs, createNewBlog, deleteListedBlogById, readBlog } from '../controllers/blogController.js';
import multer from 'multer';
import { uploadImage } from '../config/CloudConfig.js';

const blogRouter = express.Router();

blogRouter.get("/", allBlogs);
blogRouter.get("/:id", readBlog);
blogRouter.post("/", uploadImage.single('blog[image]'), createNewBlog);    //add middleware for admin access only. And not tested
blogRouter.delete("/:id", deleteListedBlogById);        //add middleware for admin to delete. and tested ✅


export default blogRouter;