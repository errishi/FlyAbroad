import "dotenv/config";
import { sendMail } from "./emailTransport.js";

export const sendOtpEmail = async (email, otp) => {
  const plainText = `Your OTP for password reset is: ${otp}. It is valid for 10 minutes. If you did not request this, please ignore this email.`;

  const mailOptions = {
    to: email,
    subject: process.env.MAIL_SUBJECT_OTP || "FlyAbroad — Password Reset OTP",
    text: plainText,
    html: `Your OTP for password reset is: <b>${otp}</b>. It is valid for 10 minutes. If you did not request this, please ignore this email.`,
  };

  try {
    const info = await sendMail(mailOptions);
    console.log("OTP email sent:", info.response || info.messageId || info);
    return info;
  } catch (error) {
    console.error("Error sending OTP email:", error.message);
    throw new Error("Failed to send OTP email");
  }
};
