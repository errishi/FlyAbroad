import express from 'express';
import { allStudentEnquiry, detailStudentEnquiryView, newStudentEnquiry } from '../controllers/studentEnquiryController.js';

const studentRouter = express.Router();

studentRouter.get('/', allStudentEnquiry);      //add middleware for admin authentication to view all enquiries
studentRouter.post('/', newStudentEnquiry);     // public route for students to submit their enquiries
studentRouter.get('/:id', detailStudentEnquiryView);   //add middleware for admin authentication to view enquiry details

export default studentRouter;