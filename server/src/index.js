import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRouter from "./routes/email.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const ORIGINS = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((s) => s.trim());

app.use(cors({ origin: ORIGINS }));
app.use(express.json());

// Root route for quick uptime check
app.get("/", (_req, res) => {
  res.send("backend is running");
});

// Health endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "duo-mern-portfolio-server" });
});

// API routes
app.use("/api/email", emailRouter);

// Error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server after DB connect (non-fatal if MONGO_URI missing)
connectDB().finally(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
