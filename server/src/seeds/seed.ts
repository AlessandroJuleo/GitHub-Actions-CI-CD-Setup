import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import fs from "fs";
import path from "path";

// Obtener la ruta del JSON
const jsonPath = path.join(path.resolve(), "server/src/seeds/pythonQuestions.json");

// Leer el JSON manualmente
const pythonQuestions = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

db.once("open", async () => {
  await cleanDB("Question", "questions");
  await Question.insertMany(pythonQuestions);

  console.log("Questions seeded!");
  process.exit(0);
});
