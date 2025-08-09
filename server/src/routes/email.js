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
      let id = null;
      try {
        const doc = await Contact.create({ name, email, message });
        id = doc?._id;
      } catch (dbErr) {
        console.warn("Contact save skipped/failed:", dbErr?.message || dbErr);
      }

      await sendContactEmail({ name, email, message });
      return res.json({ success: true, id });
    } catch (err) {
      console.error("Email send failed:", err);
      return res.status(500).json({ error: "Failed to send message" });
    }
  }
);

export default router;
