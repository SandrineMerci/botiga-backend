import { createProduct, getAllProduct,getProductById,deleteProductById,updateProductById } from "../controllers/ProductController.js";
import express from 'express';
import configureMulter from "../utils/multer.js";

const productRouter=express.Router();
const upload=configureMulter();
productRouter.post("/createProduct", upload, createProduct);
productRouter.get("/getAllProduct",getAllProduct);
productRouter.get("/getProductById/:id",getProductById);
productRouter.delete("/deleteProductById/:id",deleteProductById);
productRouter.put("/updateProductById/:id",updateProductById);
export default productRouter;