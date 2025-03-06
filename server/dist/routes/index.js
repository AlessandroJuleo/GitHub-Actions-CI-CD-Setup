import express from "express";
import path from "path";
import apiRoutes from "./api/index.js";
const router = express.Router();
// 🔥 Obtener __dirname SIN import.meta.url
const __dirname = path.resolve(path.dirname(""));
router.use("/api", apiRoutes);
// 🔥 Servir el frontend correctamente
router.use((_req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/index.html"));
});
export default router;
