import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRouter from "./src/routes/email.js";
import mongoose from "mongoose";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const ORIGIN = process.env.CORS_ORIGIN || "https://duo-portfolio-website-frontend.onrender.com";

app.use(cors({ origin: ORIGIN }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "duo-mern-portfolio-server" });
});

app.get("/", (_req, res) => {
  res.send("backend is running");
});

app.use("/api/email", emailRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
