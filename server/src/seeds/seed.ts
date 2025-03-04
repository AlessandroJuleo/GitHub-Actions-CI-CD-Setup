import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import fs from "fs";
import path from "path";

// Leer JSON manualmente para evitar errores de importación
const jsonPath = path.join(__dirname, "pythonQuestions.json");
const pythonQuestions = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

db.once("open", async () => {
  await cleanDB("Question", "questions");
  await Question.insertMany(pythonQuestions);

  console.log("Questions seeded!");
  process.exit(0);
});
