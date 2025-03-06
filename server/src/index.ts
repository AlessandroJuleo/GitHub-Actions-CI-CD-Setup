import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080; // Render usa 8080 por defecto

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running successfully!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
