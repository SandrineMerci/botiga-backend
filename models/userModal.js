import mongoose from "mongoose";

const {model,Schema} =mongoose;

const userschema=Schema(
    {
        userName:{
            type:String,
            required:true
        },
        userEmail:{
            type:String,
            required:true
        },
        userPassword:{
            type:String,
            required:true
        },
        userRole:{
            type:String,
            required:false,
            enum:["user,admin"],
        }

    }
)

const User =model("users", userschema);
export default User;