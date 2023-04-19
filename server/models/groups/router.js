import express from 'express';
import { deleteByIdGroups, getAllGroups, getByIdGroups, postDataGroups, updateGroups } from './model.js';


export const groupsRouter  = express.Router();

groupsRouter.get("/groups", getAllGroups)
groupsRouter.get("/groups/:id", getByIdGroups)
groupsRouter.post("/groups", postDataGroups)
groupsRouter.put('/groups/:id', updateGroups)
groupsRouter.delete('/groups/:id', deleteByIdGroups)

groupsRouter.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });