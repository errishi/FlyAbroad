import express from "express"
import { changePassword, forgotPassword, loginUser, logoutUser, registerUser, verifyEmail, verifyOtp } from "../controllers/userController.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js"
import { userSchema, validate } from "../../Validators/userValidate.js"


const router = express.Router()

router.post('/register', validate(userSchema), registerUser)
router.post('/verify', verifyEmail)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.post('/forgot-password', forgotPassword)
router.post('/verify-otp/:email', verifyOtp)
router.put('/change-password/:email', changePassword)

export default router