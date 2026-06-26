import "dotenv/config";
import { sendMail } from "./emailTransport.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import handlebars from "handlebars";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sendVerificationEmail = async (token, email) => {
  const emailTemplateSource = fs.readFileSync(
    path.join(__dirname, "template.hbs"),
    "utf8"
  );

  const template = handlebars.compile(emailTemplateSource);
  const verificationUrl = `${process.env.FRONTEND_URL || "https://yourdomain.com"}/verify/${encodeURIComponent(
    token
  )}`;
  const htmlToSend = template({ verificationUrl });

  const mailConfigurations = {
    to: email,
    subject: process.env.MAIL_SUBJECT_VERIFICATION || "FlyAbroad — Email Verification",
    text: `Please verify your email by opening this link: ${verificationUrl}`,
    html: htmlToSend,
  };

  try {
    const info = await sendMail(mailConfigurations);
    console.log("Email sent:", info.response || info.messageId || info);
    return info;
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error("Failed to send verification email");
  }
};
