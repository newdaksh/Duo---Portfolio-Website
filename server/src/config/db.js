import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn("MONGO_URI not set. Skipping DB connection.");
    return;
  }
  try {
    await mongoose.connect(uri, {
      dbName: process.env.MONGO_DB || undefined,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
}
