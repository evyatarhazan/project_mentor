import express from 'express';
import { deleteByIdStudentGroupRelationship, getAllStudentGroupRelationship, getByFkStudentGroupRelationship, getByIdStudentGroupRelationship, postDataStudentGroupRelationship } from './model.js';


export const studentGroupRelationshipRouter  = express.Router();

studentGroupRelationshipRouter.get("/student-group-relationship", getAllStudentGroupRelationship)
studentGroupRelationshipRouter.get("/student-group-relationship/:id", getByIdStudentGroupRelationship)
studentGroupRelationshipRouter.get("/student-group-relationship-by-fk", getByFkStudentGroupRelationship)
studentGroupRelationshipRouter.post("/student-group-relationship", postDataStudentGroupRelationship)
studentGroupRelationshipRouter.delete('/student-group-relationship/:id', deleteByIdStudentGroupRelationship)

studentGroupRelationshipRouter.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });
