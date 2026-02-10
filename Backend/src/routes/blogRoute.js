import express from 'express';
import { allBlogs, readBlog } from '../controllers/blogController.js';

const blogRouter = express.Router();

blogRouter.get("/", allBlogs);
blogRouter.get("/:id", readBlog);

export default blogRouter;