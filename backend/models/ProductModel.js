import mongoose, { mongo } from "mongoose";
 //creamos un schema

 const productSchema = new mongoose.Schema(
    
    { 
        description:{
        type: String,
        required:[true, "please complete the field"]
     },

     stock:{
        type:Number,
        required:[true,"please complete the field"]
     },

     price:{
        type:Number,
        required:[true,"please complete the field"]
     },
    } ,
     {
        timestamps:true,
        versionKey:false
     }
    
);


 export const ProductModel = mongoose.model("Product",productSchema)


