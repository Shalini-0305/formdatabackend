import express from "express";
import { createStudent,getAllStudents } from "../controller/studentController.js";

const route = express.Router()

route.post("/student",createStudent);
route.get("/getallstudents",getAllStudents);

export default route;