import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRouter from "./src/routes/email.js";
import { connectDB } from "./src/config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const ORIGIN =
  process.env.CORS_ORIGIN ||
  "https://duo-portfolio-website-frontend.onrender.com";

// Middlewares
app.use(cors({ origin: ORIGIN }));
app.use(express.json());

// Connect to MongoDB, then start server
connectDB()
  .then(() => {
    console.log("✅ Database connection attempt finished");

    // Health check route
    app.get("/api/health", (_req, res) => {
      res.json({ status: "ok", service: "duo-mern-portfolio-server" });
    });

    // Root route
    app.get("/", (_req, res) => {
      res.send("backend is running");
    });

    // Email/contact API route
    app.use("/api/email", emailRouter);

    // Error handler
    app.use((err, _req, res, _next) => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB. Server not started.", err);
    process.exit(1);
  });
