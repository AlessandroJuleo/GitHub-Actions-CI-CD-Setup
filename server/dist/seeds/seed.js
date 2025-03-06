var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import fs from "fs";
import path from "path";
// 🔥 Forzar la ruta correcta del JSON
const jsonPath = path.resolve("server/src/seeds/pythonQuestions.json");
// 🔥 Verificar si el archivo realmente existe
if (!fs.existsSync(jsonPath)) {
    console.error(`❌ Error: No se encontró el archivo JSON en ${jsonPath}`);
    process.exit(1);
}
// 🔥 Leer el JSON manualmente sin importaciones
const pythonQuestions = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
db.once("open", () => __awaiter(void 0, void 0, void 0, function* () {
    yield cleanDB("Question", "questions");
    yield Question.insertMany(pythonQuestions);
    console.log("✅ Questions seeded!");
    process.exit(0);
}));
