import type { Request, Response } from "express";
import express from "express";
import path from "path";
import apiRoutes from "./api/index.js";

const router = express.Router();

// Servir las rutas de la API
router.use("/api", apiRoutes);

// Servir el frontend de React en producción
router.use((_req: Request, res: Response) => {
  res.sendFile(path.resolve("client/dist/index.html"));
});

export default router;
