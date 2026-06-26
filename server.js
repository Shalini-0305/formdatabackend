// import app from "./app.js";
// import { connectdb } from "./db.js";

// connectdb()

// app.get("/data",(req,res)=>{
//     res.send("api is running");
// })

// // app.listen(5000,(req,res)=>{
// //     console.log("Backend running");
// // })

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Backend running on port ${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectdb } from "./db.js";
import route from "./route/studentRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// routes
app.use("/", route);

// DB + server start
connectdb().then(() => {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, "0.0.0.0", () => {
    console.log("Backend running on port", PORT);
  });
});