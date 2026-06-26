import Student from "../model/studentModel.js";

export const createStudent=async(req,res)=>{
    try{
        const data = await Student.create(req.body);
        res.status(200).json({
            message:"sucess",
            data,
        });
    }
    catch(err){
       console.log(err) 
    }  
};
export const getAllStudents = async(req,res)=>{
    try{
        const students = await Student.find();
        res.status(200).json({
            message:"sucess",
            data:students
        })
    }
    catch(err){
        console.log(err);
    }
}
   
