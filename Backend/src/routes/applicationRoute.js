import express from 'express';
import { deleteApplicationByApplicationId, getAllApplicationForms, newApplicationForm, updateApplicationStatusByApplicationId, viewApplicationById } from '../controllers/applicationController.js';
import { uploadMixed } from '../config/CloudConfig.js';

const applicationRouter = express.Router();

applicationRouter.post("/new", uploadMixed.fields([
    { name: 'passport', maxCount: 1 },
    { name: 'transcript', maxCount: 1 },
    { name: 'englishTestResult', maxCount: 1 },
    { name: 'recommendationLetter', maxCount: 1 },
    { name: 'sop', maxCount: 1 }
]), newApplicationForm);            //add middlerware to allow only login user tested ✅.

applicationRouter.get('/', getAllApplicationForms);         //add middleware for admin access, tested ✅

applicationRouter.get('/:applicationId', viewApplicationById);       //add middleware for admin access only, tested✅

applicationRouter.patch('/:applicationId', updateApplicationStatusByApplicationId);           //add middleware for admin access only, tested✅

applicationRouter.delete('/:applicationId', deleteApplicationByApplicationId);            //add middleware for admin access only, tested✅

export default applicationRouter;