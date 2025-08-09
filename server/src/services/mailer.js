import nodemailer from "nodemailer";

export function isMailerConfigured() {
  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
  return required.every(
    (k) => process.env[k] && String(process.env[k]).trim() !== ""
  );
}

let transporter;
function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      pool: true,
    });
  }
  return transporter;
}

export async function verifyMailer() {
  if (!isMailerConfigured()) {
    console.warn(
      "Mailer not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS."
    );
    return false;
  }
  try {
    await getTransporter().verify();
    console.log("SMTP transport ready");
    return true;
  } catch (e) {
    console.error("SMTP verify failed:", e?.message || e);
    return false;
  }
}

export async function sendContactEmail({ name, email, message }) {
  if (!isMailerConfigured()) {
    const err = new Error("EMAIL_NOT_CONFIGURED");
    err.code = "EMAIL_NOT_CONFIGURED";
    throw err;
  }

  const to = process.env.MAIL_TO || process.env.SMTP_USER;
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;

  const text = `New portfolio inquiry\n\nFrom: ${name} <${email}>\n\nMessage:\n${message}`;
  const html = `
    <h2>New portfolio inquiry</h2>
    <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-line">${message}</p>
  `;

  return getTransporter().sendMail({
    to,
    from,
    subject: `New inquiry from ${name}`,
    text,
    html,
    replyTo: email,
  });
}
