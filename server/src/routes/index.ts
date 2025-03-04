import type { Request, Response } from "express";
import express from "express";
import path from "path";
import apiRoutes from "./api/index.js";

const router = express.Router();

// Obtener __dirname sin usar import.meta.url
const __dirname = path.resolve();

// Usar las rutas de API
router.use("/api", apiRoutes);

// Servir el frontend de React en producción
router.use((_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

export default router;
