import express from "express"
import { loginUser, registerUser } from "../controllers/userController.js"
import { verifyMail } from "../../emailverify/verifyemail.js"

const router = express.Router()

router.post('/register', registerUser)
router.post('/verify', verifyMail)
router.post('/login', loginUser)


export default router