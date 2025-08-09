import { Router } from "express";
import { body, validationResult } from "express-validator";
import { sendContactEmail } from "../services/mailer.js";
import Contact from "../models/Contact.js";

const router = Router();

router.post(
  "/",
  [
    body("name").trim().isLength({ min: 2 }).withMessage("Name is required."),
    body("email").isEmail().withMessage("Valid email is required."),
    body("message")
      .trim()
      .isLength({ min: 10 })
      .withMessage("Message must be at least 10 characters."),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    try {
      // Save to MongoDB (required)
      let id = null;
      let doc = null;
      try {
        doc = await Contact.create({ name, email, message });
        id = doc?._id;
        console.log("Contact saved to MongoDB:", id);
      } catch (dbErr) {
        console.error("Contact save failed:", dbErr?.message || dbErr);
        return res
          .status(500)
          .json({ error: "Failed to save contact to database." });
      }

      // Email step is optional. If SMTP isn't configured, skip quietly.
      let emailSent = false;
      const hasSMTP =
        !!process.env.SMTP_HOST &&
        !!process.env.SMTP_USER &&
        !!process.env.SMTP_PASS;
      if (hasSMTP) {
        try {
          await sendContactEmail({ name, email, message });
          emailSent = true;
        } catch (mailErr) {
          console.error("Email send failed:", mailErr?.message || mailErr);
          // Do not fail the whole request if email fails
        }
      } else {
        console.info("Email not configured; skipping email step.");
      }

      return res.json({ success: true, id, emailSent });
    } catch (err) {
      console.error("Contact handler failed:", err);
      return res.status(500).json({ error: "Failed to process message." });
    }
  }
);

export default router;
