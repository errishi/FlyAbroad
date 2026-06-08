import express from 'express';
import { allUniversity, universityViewDetails } from '../controllers/universityController.js';

const universityRouter = express.Router();

universityRouter.get("/", allUniversity);
universityRouter.get("/:id", universityViewDetails);

export default universityRouter;