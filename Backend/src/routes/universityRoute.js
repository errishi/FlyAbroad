import express from 'express';
import { allUniversity } from '../controllers/universityController.js';

const universityRouter = express.Router();

universityRouter.get("/", allUniversity);

export default universityRouter;