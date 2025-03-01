import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const blogSchema = new Schema(
    {
      date:{
          type: String,
          required:true
      },
    description:{
        type: String,
        required:true,
    },
    images:{
        type: Array,
        required:false
    },
  },
    {
        timestamps:true
    }
        
)

const Blog = model("Blog", blogSchema);

export default Blog;