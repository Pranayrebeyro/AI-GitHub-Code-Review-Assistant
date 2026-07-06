import dotenv from "dotenv";

console.log("1. Before dotenv");
dotenv.config();

console.log("2. After dotenv");

import app from "./app.js";

console.log("3. After importing app");

const PORT = process.env.PORT || 5000;

console.log("4. Before listen");

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

console.log("5. After listen");