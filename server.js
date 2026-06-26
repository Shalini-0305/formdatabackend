import app from "./app.js";
import { connectdb } from "./db.js";

connectdb()

app.get("/data",(req,res)=>{
    res.send("api is running");
})

app.listen(5000,(req,res)=>{
    console.log("Backend running");
})