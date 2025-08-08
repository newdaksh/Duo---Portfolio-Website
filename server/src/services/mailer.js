import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail({ name, email, message }) {
  const to = process.env.MAIL_TO || process.env.SMTP_USER;
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;

  const text = `New portfolio inquiry\n\nFrom: ${name} <${email}>\n\nMessage:\n${message}`;
  const html = `
    <h2>New portfolio inquiry</h2>
    <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-line">${message}</p>
  `;

  return transporter.sendMail({
    to,
    from,
    subject: `New inquiry from ${name}`,
    text,
    html,
    replyTo: email,
  });
}
