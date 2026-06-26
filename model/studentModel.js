import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:String,
    rollno:String,
    dob:String,
    gender:String,
    mobno:Number,
    email:String,
    dept:String,
});

export default mongoose.model("Student",studentSchema);