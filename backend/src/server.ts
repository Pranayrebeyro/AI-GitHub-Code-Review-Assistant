import dotenv from "dotenv";

// Load environment variables first
console.log("1. Before dotenv");
dotenv.config();
console.log("2. After dotenv");

// Import Express app
import app from "./app.js";
console.log("3. After importing app");

// Get port from environment (Render sets this automatically)
const PORT = Number(process.env.PORT) || 10000;

console.log("PORT =", PORT);
console.log("NODE_ENV =", process.env.NODE_ENV);

console.log("4. Before listen");

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log("5. Server started successfully");
  console.log(`🚀 Server running on port ${PORT}`);
});

console.log("6. After listen");