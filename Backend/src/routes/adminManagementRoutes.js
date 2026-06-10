import express from 'express';
import { User } from '../models/userModel.js';
import { authorizeRoles } from '../middleware/checkRole.js';
// auth middleware

const adminManagementRoute = express.Router();

adminManagementRoute.put('/assign-tasks/:adminId', authorizeRoles('super_admin'), )

export default adminManagementRoute;