import { createBlog ,getAllBlogs} from "../controllers/BlogController.js";
import express from 'express';
import configureMulter from "../utils/multer.js";




const blogRouter=express();
const upload = configureMulter();

blogRouter.post("/createBlog", upload, createBlog);
blogRouter.get("/getAllBlogs", upload, getAllBlogs);


export default blogRouter;