import express from "express"
import { changePassword, forgotPassword, loginUser, logoutUser, registerUser, verifyOtp } from "../controllers/userController.js"
import { verifyMail } from "../../emailverify/verifyemail.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js"
import { userSchema, validate } from "../../Validators/userValidate.js"

const router = express.Router()

router.post('/register', registerUser)
router.post('/verify', verifyMail)
router.post('/login', loginUser)
router.post('/logout',isAuthenticated, logoutUser)
router.post('/forgot-password', forgotPassword)
router.post('/verify-otp/:email', verifyOtp)
router.post('/change-password/:email', changePassword)


export default router