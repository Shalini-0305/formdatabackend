import mongoose from "mongoose";
export const connectdb = () =>{
    try{
        mongoose.connect("mongodb://localhost:27017");
        console.log("DB Connected");
    }
    catch(err){
        console.log(err);
    }
}