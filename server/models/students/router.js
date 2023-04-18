import express from 'express';
// import {postDatastudents, getAllstudents, deleteByIdstudents} from './model.js'
import { deleteByIdStudents, getAllStudents, getByIdStudents, postDataStudents, updateStudents } from './model.js';


export const studentRouter  = express.Router();

studentRouter.get("/students", getAllStudents)
studentRouter.get("/students/:id", getByIdStudents)
studentRouter.post("/students", postDataStudents)
studentRouter.put('/students/:id', updateStudents)
studentRouter.delete('/students/:id', deleteByIdStudents)

studentRouter.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });