import { sendOtpEmail } from "../../emailverify/sentOtp.js";
import { Session } from "../models/sessionModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { sendVerificationEmail } from "../../emailverify/verifyemail.js";

// Ensure a JWT secret is defined
const JWT_SECRET = process.env.JWT_SECRET;

export const registerUser = async (req, res) => {
  try {
    console.log("JWT_SECRET:", JWT_SECRET);
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 20);
    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
      isVerified: false
    });

    // Generate token for email verification
    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "10m" });
    newUser.token = token;
    await newUser.save();

    try {
      await sendVerificationEmail(token, email);
    } catch (emailError) {
      await User.findByIdAndDelete(newUser._id);
      console.error("Verification email failed:", emailError.message);
      return res.status(500).json({ success: false, message: "Failed to send verification email. Please try again later." });
    }

    return res.status(201).json({
      success: true,
      message: "User registered successfully. Please verify your email.",
      data: { id: newUser._id, username: newUser.username, email: newUser.email }
    });
  } catch (error) {
    console.error("Registration error:", error.message);
    return res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
};
export const verifyEmail = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ success: false, message: "Authorization header missing or invalid" });
    }

    const token = authHeader.split(" ")[1];
    let decoded;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(400).json({ success: false, message: "Token expired" });
      }
      return res.status(400).json({ success: false, message: "Invalid token" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Clear token if stored, mark verified
    user.token = null;
    user.isVerified = true;
    await user.save();

    return res.status(200).json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    console.error("Verification error:", error.message);
    return res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
}
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(402).json({ success: false, message: "Invalid password" });
    }

    if (!user.isVerified) {
      return res.status(403).json({ success: false, message: "Email not verified, verify your account" });
    }

    const existingSession = await Session.findOne({ userId: user._id });
    if (existingSession) {
      await Session.deleteOne({ userId: user._id });
    }

    await Session.create({ userId: user._id });

    // Create tokens
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    user.isLoggedIn = true;
    await user.save();

    res.cookie("accessToken", accessToken, {
      httpOnly: true,   // prevents JS access
      secure: process.env.NODE_ENV === "production", 
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    // Return user data without sensitive fields
    const userResponse = {
      id: user._id,
      username: user.username,
      email: user.email,
      isVerified: user.isVerified,
      isLoggedIn: user.isLoggedIn
    };

    return res.status(200).json({
      success: true,
      message: `Welcome back ${user.username}`,
      accessToken,
      refreshToken,
      user: userResponse
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
export const logoutUser = async (req, res) => {
  try {
    const userId = req.userId;
    await Session.deleteMany({ userId });
    await User.findByIdAndUpdate(userId, { isLoggedIn: false });
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    return res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

    user.otp = otp;
    user.otpExpiry = expiry;
    await user.save();
    await sendOtpEmail(email, otp);
    return res.status(200).json({
      success: true, 
      message:"OTP sent sucessfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const verifyOtp = async (req, res) => {
  const { otp } = req.body;
  const email = req.params.email;

  if (!otp) {
    return res.status(400).json({ success: false, message: "OTP is required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!user.otp || !user.otpExpiry) {
      return res.status(400).json({ success: false, message: "OTP not generated or already verified" });
    }

    if (user.otpExpiry < new Date()) {
      return res.status(400).json({ success: false, message: "OTP expired, please request a new one" });
    }

    if (otp !== user.otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    return res.status(200).json({ success: true, message: "OTP verified successfully" })
    
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const changePassword = async (req, res) => {
  const { newPassword, confirmPassword } = req.body;
  const email = req.params.email;

  if (!newPassword || !confirmPassword) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  if (newPassword != confirmPassword) {
    return res.status(400).json({ success: false, message: "Passwords do not match" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ success: true, message: "Password changed successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
