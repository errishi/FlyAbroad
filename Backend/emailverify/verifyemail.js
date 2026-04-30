import nodemailer from "nodemailer";
import 'dotenv/config';
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import handlebars from "handlebars";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const templatePath = path.join(__dirname, "templates", "verifyEmail.hbs");
// const emailTemplate = fs.readFileSync(templatePath, "utf8");
// const compiledTemplate = handlebars.compile(emailTemplate);

export const verifyMail = async (token, email) => {

const emailTempelateSource = fs.readFileSync(path.join(__dirname, "templates", "verifyEmail.hbs"), "utf8"
)

const template = handlebaesr.compile(emailTempelateSource)
const htmlToSend = template({ token: encodedURICompnonent(token)})
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    const mailconfigurations = {
        from: process.env.MAIL_USER,
        to: email,
        subject: "Email Verification",
        html: `<p>Click the link below to verify your email:</p><a href="http://localhost:3000/verify-email?token=${token}">Verify Email</a>`
    }
    try {
        await transporter.sendMail(mailconfigurations);
    } catch (error) {
        throw new Error("Failed to send verification email");
    }
    transporter.sendMail(mailconfigurations, function (error, info) {
        if (error) {
            throw new Error("Error sending email: " + error.message);
        } else {
            console.log("Email sent:", info.response);
        }
    });
}; 