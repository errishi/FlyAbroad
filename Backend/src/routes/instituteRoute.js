import express from 'express';
import { allInstituteEnquiry, enquiryViewDetails, newInstituteEnquiry } from '../controllers/instituteEnquiryController.js';

const instituteRouter = express.Router();

instituteRouter.get("/", allInstituteEnquiry);      // add middleware for only admin access
instituteRouter.post("/", newInstituteEnquiry);     //public route for institutes to submit enquiry
instituteRouter.get("/:id", enquiryViewDetails);        // add middleware for only admin access

export default instituteRouter;