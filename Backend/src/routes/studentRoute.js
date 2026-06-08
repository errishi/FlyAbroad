import express from 'express';
import { allStudentEnquiry, detailStudentEnquiryView, newStudentEnquiry } from '../controllers/studentEnquiryController.js';

const studentRouter = express.Router();

studentRouter.get('/', allStudentEnquiry);
studentRouter.post('/', newStudentEnquiry);
studentRouter.get('/:id', detailStudentEnquiryView);

export default studentRouter;