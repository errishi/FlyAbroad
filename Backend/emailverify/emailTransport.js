import nodemailer from "nodemailer";

function buildTransport() {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
    });
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
  });
}

const transporter = buildTransport();

function extractAddress(value) {
  if (!value) return null;
  // If value is like 'Name <email@domain.com>' extract inside <>
  const match = value.match(/<([^>]+)>/);
  if (match) return match[1].trim();
  // If plain email, return it
  if (value.includes("@")) return value.trim();
  return null;
}

export async function sendMail(options) {
  // Prefer MAIL_FROM (display name allowed) or FALLBACK to MAIL_FROM_ADDRESS or MAIL_USER
  const mailFromHeader = process.env.MAIL_FROM || process.env.MAIL_FROM_ADDRESS || process.env.MAIL_USER;
  const mailFromAddress = extractAddress(process.env.MAIL_FROM) || process.env.MAIL_FROM_ADDRESS || process.env.MAIL_USER;

  // Build a stable Message-ID using timestamp + domain
  const domain = mailFromAddress && mailFromAddress.split("@")[1];
  const messageId = `<${Date.now()}.${Math.random().toString(36).slice(2)}@${domain || "local"}>`;

  const defaultHeaders = {
    "X-Mailer": process.env.MAIL_XMAILER || "FlyAbroad Mailer",
    "List-Unsubscribe": `<mailto:${process.env.MAIL_REPLY_TO || mailFromAddress}?subject=unsubscribe>`,
    "Message-ID": messageId,
  };

  const finalOptions = {
    envelope: {
      from: mailFromAddress,
      to: options.to,
    },
    from: mailFromHeader,
    replyTo: process.env.MAIL_REPLY_TO || mailFromAddress,
    subject: options.subject,
    text: options.text,
    html: options.html,
    headers: { ...(options.headers || {}), ...defaultHeaders },
  };

  return transporter.sendMail(finalOptions);
}

export default transporter;
