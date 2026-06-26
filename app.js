import express from "express";
import cors from "cors";
import studentRoute from "./route/studentRoute.js";

const app = express()

app.use(express.json())
app.use(cors())

app.use(studentRoute)

export default app