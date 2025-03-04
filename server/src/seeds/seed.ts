import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import fs from "fs";
import path from "path";

// Obtener la ruta del JSON correctamente
const jsonPath = path.join(process.cwd(), "server/src/seeds/pythonQuestions.json");

// Verificar si el archivo JSON realmente existe antes de cargarlo
if (!fs.existsSync(jsonPath)) {
  console.error(`Error: No se encontró el archivo JSON en ${jsonPath}`);
  process.exit(1);
}

// Leer el JSON manualmente sin `assert { type: "json" }`
const pythonQuestions = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

db.once("open", async () => {
  await cleanDB("Question", "questions");
  await Question.insertMany(pythonQuestions);

  console.log("Questions seeded!");
  process.exit(0);
});
