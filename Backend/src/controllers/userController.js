import { verifyMail } from "../../emailverify/verifyemail.js";
import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false, message: "User already exists"

            })
        }

        const hashPassword = await bcrypt.hash(password, 0);
        const newUser = await User.create({
            username, email, password: hashPassword
        })
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "30min" });
        verifyMail(token)
        newUser.token = token;
        await newUser.save();
        return res.status(201).json({
            success: true, message: "User registered successfully", data: newUser

        })

    } catch (error) {
        return res.status(500).json({
            success: false, message: "Server error", error: error.message

        })
    }
}

export const verifyEmail = async (req, res) => {
        
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Authorization header missing" });
        }
        
        const token = authHeader.split(" ")[1];
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.SECRET_KEY);
        } catch (err) {
            if (err.name === "TokenExpiredError") {
                return res.status(400).json({ success: false, message: "Token expired" });
            }
            return res.status(400).json({ success: false, message: "Invalid token" })
        }
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        user.token = null
        user.isVerified = true
        await user.save()

        return res.status(200).json({ success: true, message: "Email verified successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
        
    }


}

export const loginUser = async (req, res) => {
    try {
        const {emai, password} = req.body;
        if(!email || !password){
            return res.status(400).json({success: false, message: "All fields are required"})
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        //check if email is verified
        if (!user.isVerified !== true) {
            return res.status(403).json({ success: false, message: "Email not verified, verify your account" });

        }

        // check for existing session and deleted 
        const existingSession = await Session.findOne({ userId: user._id });
        if(existingSession){
            await Session.deleteOne({userID:user._id })
        }

    // create a new session 
    await Session.create({userId: user._id})

    // create tokens
    const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "10d" });
    const  refreshToken =jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "30d" });

    user.isLoggedIn =   true;
    await user.save()
    return res.status(200).json({ success: true, message: `Welcome back ${user.name}`, data: { accessToken, refreshToken } });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
}