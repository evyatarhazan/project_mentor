import cors from "cors";
import express from "express";
import * as dotenv from "dotenv";
import { studentRouter } from "./models/students/router.js";
import { groupsRouter } from "./models/groups/router.js";
import { studentActivityRouter } from "./models/studentActivity/router.js";
import { groupActivityRouter } from "./models/groupActivity/router.js";
import { studentGroupRelationshipRouter } from "./models/studentGroupRelationship/router.js";

dotenv.config()

const app = express();
const port = process.env.PORT || 4000; // Default to port 4000 if PORT environment variable is not set

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', studentRouter, groupsRouter, studentActivityRouter, groupActivityRouter, studentGroupRelationshipRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});


