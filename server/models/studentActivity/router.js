import express from 'express';
import { deleteByIdStudentActivity, getAllStudentActivity, getByIdStudentActivity, postDataStudentActivity, updateStudentActivity, getByFkStudentActivity } from './model.js';


export const studentActivityRouter  = express.Router();

studentActivityRouter.get("/student-activity", getAllStudentActivity)
studentActivityRouter.get("/student-activity/:id", getByIdStudentActivity)
studentActivityRouter.get("/student-activity-by-fk", getByFkStudentActivity)
studentActivityRouter.post("/student-activity", postDataStudentActivity)
studentActivityRouter.put('/student-activity/:id', updateStudentActivity)
studentActivityRouter.delete('/student-activity/:id', deleteByIdStudentActivity)

studentActivityRouter.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });