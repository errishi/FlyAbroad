import express from 'express';
import { allFeedback, newFeedback } from '../controllers/userFeedbackController.js';

const userFeedbackRouter = express.Router();

userFeedbackRouter.get("/", allFeedback)
// add middleware for user login data
userFeedbackRouter.post("/", newFeedback);      // not tested

export default userFeedbackRouter;