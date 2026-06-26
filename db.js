// import mongoose from "mongoose";
// export const connectdb = () =>{
//     try{
//         mongoose.connect("mongodb+srv://shalinicseng_db_user:Ih0aNLoVU4kIDE2Q@cluster0.2cls5d2.mongodb.net/");
//         console.log("DB Connected");
//     }
//     catch(err){
//         console.log(err);
//     }
// }

import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
  } catch (err) {
    console.log("DB Error:", err.message);
  }
};