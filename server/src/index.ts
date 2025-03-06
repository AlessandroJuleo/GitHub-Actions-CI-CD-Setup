import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/quizdb";

// Middlewares
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("🟢 Conectado a MongoDB"))
  .catch((err) => console.error("🔴 Error conectando a MongoDB:", err));

// Ruta de prueba
app.get("/", (_req, res) => {
  res.send("🚀 API funcionando correctamente!");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🌎 Servidor corriendo en: http://localhost:${PORT}`);
});
