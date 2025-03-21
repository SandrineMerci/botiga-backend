import Blog from "../models/BlogModal.js"
import { cloudinary } from "../utils/cloudinaryConfig.js";

export const createBlog=async(req, res)=>{
    
   // productImage
    
    try{
      
        if(!req.files || !req.files.images || req.files.images.length===0){
            return res.status(400).json({ success:false, message: "No image uploaded"});
        }

        const result = await cloudinary.uploader.upload(req.files.images[0].path);
       
       const {date,description}=req.body;
       const images= result.secure_url;
       const newBlog=new Blog({date,description,images});

       await newBlog.save();
 
       res.status(201).json({success:true, message: "Blog created successfully",Blog: newBlog});


    } catch(error){
       res.status(500).json({ success: false, message: "server Error", error: error.message});
       
    }
}

export const getAllBlogs =async(req,res)=>{
   try{
      const blogs= await Blog.find();
      res.status(200).json({success:true,blogs})

   } catch(error){
      res.status(500).json({ success: false, message: "server Error", error: error.message});
   }
}

 export const getProductById=async(req,res)=>{
    try{
       const {id}= req.params;
       const products=await Product.findById(id);
        if(!products){
         return res.status(404).json({ success: false, message: "Product not foundr"});
        }
        res.status(200).json({ success: true, products});
    } catch(error){
       res.status(500).json({ success: false, message: "server Error", error: error.message});
    }
 }

 export const deleteProductById=async(req,res)=>{
   try{
     const {id} =req.params;
     const product = await Contact.findByIdAndDelete(id);
     if(!product){
       return res.status(404).json({ success: false, message: "Product not found"});
      }
  res.status(200).json({ success: true, message: "Product deleted successfull"});
   }catch(error){
    res.status(500).json({ success: false, message: "server Error", error: error.message});
   }
 }

 export const updateProductById= async(req,res)=>{
    try{
     const {id}=req.params;
     const updatedData=await Contact.findByIdAndUpdate(id,req.body);
     
     if(!updatedData){
       return res.status(404).json({ success: false, message: "Product not found"});
      }
      res.status(200).json({ success: true, message: "Product updated successfull"});
    }catch(error){
       res.status(500).json({ success: false, message: "server Error", error: error.message});
    }
}