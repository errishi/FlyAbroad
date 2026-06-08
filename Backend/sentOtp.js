import nodemailer from 'nodemailer';
import "dotenv/config"

export const sendOtpEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset OTP',
        html: `Your OTP for password reset is: <b>${otp}</b>. It is valid for 10 minutes. If you did not request this, please ignore this email.`
    };

    await transporter.sendMail(mailOptions);
};