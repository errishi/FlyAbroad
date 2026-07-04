import express from 'express';
import { createNewApplication, getAllApplication, viewApplicationDetails } from '../controllers/careerController.js';
import { uploadDoc } from '../config/CloudConfig.js';

const careerRouter = express.Router();

careerRouter.get("/", getAllApplication);
careerRouter.get("/:id", viewApplicationDetails);
careerRouter.post("/apply", uploadDoc.single('resumeCV'), createNewApplication);

export default careerRouter;