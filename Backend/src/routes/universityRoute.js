import express from 'express';
import { allUniversity, newUniversityListing, universityViewDetails } from '../controllers/universityController.js';
import { authorizeRoles } from '../middleware/checkRole.js';
import {uploadImage} from '../config/CloudConfig.js'
import multer from 'multer';
import { authorizeTask } from '../middleware/permissionCheck.js';

const universityRouter = express.Router();

universityRouter.get("/", allUniversity);
universityRouter.get("/:id", universityViewDetails);
universityRouter.post("/newlisting", authorizeTask('manage_universities'), uploadImage.single('university[image]'), newUniversityListing);   //auth middleware is not added and not tested

export default universityRouter;