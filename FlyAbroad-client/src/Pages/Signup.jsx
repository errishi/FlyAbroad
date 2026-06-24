import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import * as motion from "motion/react-client";
import LoginButton from "@/Components/Auth/LoginButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [isClosing, setIsClosing] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const inputSx = {
        "& .MuiOutlinedInput-root": {
            height: 44,
            borderRadius: "999px",
            backgroundColor: "#fff",
            "& fieldset": { borderColor: "#E5E7EB" },
            "&:hover fieldset": { borderColor: "#C7D2D9" },
            "&.Mui-focused fieldset": { borderColor: "#0B7077" },
        },
        "& .MuiInputBase-input": { fontSize: "14px" },
        "& .MuiInputLabel-root": { fontSize: "14px", color: "#8A8F98" },
    };

    // Signup handler
    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await axios.post(
                "http://localhost:8080/user/register",
                formData,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            if (res.data.success) {
                setMessage("✅ Signup successful! Check your email for verification link.");
                setTimeout(() => {
                    navigate("/verify");
                }, 2000);
            } else {
                setMessage(`❌ ${res.data.message || "Signup failed. Please try again."}`);
            }
        } catch (error) {
            console.error(error);
            const errorMsg = error.response?.data?.message || "An error occurred during signup.";
            setMessage(`❌ ${errorMsg}`);
        } finally {
            setLoading(false);
        }
    };


    // Input change handler
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (!isVisible) return null;

    return (
        <div className="inset-0 flex items-center justify-center bg-green-900 px-2 py-2 sm:px-4 sm:py-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isClosing ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onAnimationComplete={() => {
                    if (isClosing) setIsVisible(false);  
                }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                className="relative flex w-full max-w-[96vw] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl max-h-[95vh] sm:max-w-3xl"
            >
                {/* Close Button */}
                <div className="absolute right-3 top-3 sm:right-5 sm:top-5">
                    <button
                        type="button"
                        onClick={() => setIsClosing(true)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-black transition hover:bg-black/5"
                        aria-label="Close signup form"
                    >
                        <CloseIcon fontSize="small" />
                    </button>
                </div>

                {/* Signup Form */}
                <div className="w-full px-6 py-8 sm:px-10 sm:py-10">
                    <h1 className="mb-6 text-center text-2xl font-extrabold text-[#0f3d46] sm:text-[34px]">
                        Create an account
                    </h1>

                    {message && (
                        <div className="mb-4 rounded-lg p-3 text-center text-sm font-medium" style={{
                            backgroundColor: message.includes("✅") ? "#d4edda" : "#f8d7da",
                            color: message.includes("✅") ? "#155724" : "#721c24"
                        }}>
                            {message}
                        </div>
                    )}

                    <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSignup}>
                        {/* Full Name */}
                        <TextField
                            fullWidth
                            id="outlined-name"
                            name="username"
                            label="Full Name"
                            variant="outlined"
                            value={formData.username}
                            onChange={handleChange}
                            sx={inputSx}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <WorkOutlineIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Email */}
                        <TextField
                            fullWidth
                            id="outlined-email"
                            name="email"
                            label="Email Address"
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                            sx={inputSx}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailOutlineIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Password */}
                        <TextField
                            fullWidth
                            id="outlined-password"
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={formData.password}
                            onChange={handleChange}
                            sx={inputSx}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Signup Button */}
                        <LoginButton
                            name={loading ? "Signing up..." : "Sign Up"}
                            type="submit"
                            disabled={loading}
                        />
                        {/* Divider */}
                        <div className="my-1 flex items-center gap-3 sm:gap-4">
                            <span className="h-px flex-1 bg-gray-200" />
                            <span className="whitespace-nowrap text-sm text-gray-500">
                                Or Sign Up with
                            </span>
                            <span className="h-px flex-1 bg-gray-200" />
                        </div>

                        {/* Social Signup */}
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <button
                                type="button"
                                className="flex h-12 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                            >
                                <GoogleIcon fontSize="small" />
                                Google
                            </button>
                            <button
                                type="button"
                                className="flex h-12 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                            >
                                <LinkedInIcon fontSize="small" />
                                LinkedIn
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
