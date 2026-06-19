import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name:{
          type: String,
          required:[true, "name is required"]
      },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      match: [/^[a-zA-Z0-9]+$/, "Username can only contain letters, numbers, and underscores"]
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      match: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, 
        "Password must be at least 8 characters long and contain letters and numbers"]
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
