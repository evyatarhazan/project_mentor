import express from 'express';
import { deleteByIdGroupActivity, getAllGroupActivity, getByIdGroupActivity, postDataGroupActivity, updateGroupActivity } from './model.js';


export const groupActivityRouter  = express.Router();

groupActivityRouter.get("/group-activity", getAllGroupActivity)
groupActivityRouter.get("/group-activity/:id", getByIdGroupActivity)
groupActivityRouter.post("/group-activity", postDataGroupActivity)
groupActivityRouter.put('/group-activity/:id', updateGroupActivity)
groupActivityRouter.delete('/group-activity/:id', deleteByIdGroupActivity)

groupActivityRouter.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });