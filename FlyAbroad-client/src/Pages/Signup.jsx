import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";
import LoginButton from "@/Components/Auth/LoginButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
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

  const apiBase = import.meta.env.VITE_API_BASE || 'http://localhost:8080';

  // Signup handler
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        `${apiBase}/user/register`,
        formData,
        { headers: { "Content-Type": "application/json" } }
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

  const handleOAuthRedirect = (provider) => {
    window.location.href = `${apiBase}/auth/${provider}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-black transition hover:bg-black/5"
          aria-label="Close signup form"
        >
          <CloseIcon fontSize="small" />
        </button>

        <h1 className="mb-6 text-center text-2xl font-extrabold text-[#0f3d46] sm:text-[34px]">
          Create an account
        </h1>

        {message && (
          <div
            className="mb-4 rounded-lg p-3 text-center text-sm font-medium"
            style={{
              backgroundColor: message.includes("✅") ? "#d4edda" : "#f8d7da",
              color: message.includes("✅") ? "#155724" : "#721c24",
            }}
          >
            {message}
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSignup}>
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

          <div className="flex justify-end -mt-2">
            <button type="button" onClick={() => navigate('/forget-password')} className="text-sm text-green-600 hover:underline">Forgot Password?</button>
          </div>

          {/* Signup Button */}
          <LoginButton
            name={loading ? "Signing up..." : "Sign Up"}
            type="submit"
            disabled={loading}
          />

          {/* Divider */}
          <div className="my-4 flex items-center gap-3">
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
              onClick={() => handleOAuthRedirect('google')}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            >
              <GoogleIcon fontSize="small" />
              Google
            </button>
            <button
              type="button"
              onClick={() => handleOAuthRedirect('linkedin')}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            >
              <LinkedInIcon fontSize="small" />
              LinkedIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
