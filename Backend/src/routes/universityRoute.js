import express from 'express';
import { allUniversity, newUniversityListing, universityViewDetails } from '../controllers/universityController.js';
import { authorizeRoles } from '../middleware/checkRole.js';

const universityRouter = express.Router();

universityRouter.get("/", allUniversity);
universityRouter.get("/:id", universityViewDetails);
universityRouter.post("/", authorizeRoles("super_admin", "admin"), newUniversityListing);   //auth middleware is not added

export default universityRouter;