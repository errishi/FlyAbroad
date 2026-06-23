import nodemailer from "nodemailer";
import "dotenv/config";

const EMAIL_USER = process.env.MAIL_USER || process.env.EMAIL_USER;
const EMAIL_PASS = process.env.MAIL_PASS || process.env.EMAIL_PASS;

export const sendOtpEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: EMAIL_USER,
    to: email,
    subject: "Password Reset OTP",
    html: `Your OTP for password reset is: <b>${otp}</b>. It is valid for 10 minutes. If you did not request this, please ignore this email.`,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("OTP email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending OTP email:", error.message);
    throw new Error("Failed to send OTP email");
  }
};
