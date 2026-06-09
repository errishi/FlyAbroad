import express from 'express';
import { allInstituteEnquiry, enquiryViewDetails, newInstituteEnquiry } from '../controllers/instituteEnquiryController.js';

const instituteRouter = express.Router();

instituteRouter.get("/", allInstituteEnquiry);
instituteRouter.post("/", newInstituteEnquiry);
instituteRouter.get("/:id", enquiryViewDetails);

export default instituteRouter;