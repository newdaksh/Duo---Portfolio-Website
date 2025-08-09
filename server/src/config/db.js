import mongoose from "mongoose";

// Track connection status
let isConnected = false;

// Check if MongoDB is connected
export function isDbConnected() {
  return isConnected && mongoose.connection.readyState === 1;
}

export async function connectDB() {
  // If already connected, return early
  if (isConnected) {
    return;
  }

  // Try multiple environment variable names for flexibility
  const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
  const dbName =
    process.env.MONGO_DB || process.env.MONGODB_DATABASE || "duo_portfolio";

  if (!uri) {
    console.warn("MONGO_URI/MONGODB_URI not set. Skipping DB connection.");
    return;
  }

  try {
    console.log(`Connecting to MongoDB${dbName ? ` (${dbName})` : ""}...`);
    await mongoose.connect(uri, {
      dbName,
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = true;
    console.log(
      `MongoDB connected successfully to database: ${mongoose.connection.db.databaseName}`
    );

    // Handle connection errors after initial connect
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      isConnected = false;
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB disconnected");
      isConnected = false;
    });
  } catch (err) {
    isConnected = false;
    console.error("MongoDB connection failed:", err.message);
    // Log useful troubleshooting info, but hide credentials
    const redactedUri = uri.replace(
      /(mongodb\+srv:\/\/[^:]+):([^@]+)@/,
      "$1:***@"
    );
    console.error(`Failed to connect to: ${redactedUri}, database: ${dbName}`);
  }
}
