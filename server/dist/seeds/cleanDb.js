var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import models from "../models/index.js";
import db from "../config/connection.js";
export default (modelName, collectionName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const model = models[modelName];
        if (!model || !model.db || !model.db.db) {
            throw new Error(`Model ${modelName} is not properly initialized.`);
        }
        const collections = yield model.db.db.listCollections({
            name: collectionName,
        }).toArray();
        if (collections.length > 0) {
            yield db.dropCollection(collectionName);
        }
    }
    catch (err) {
        console.error("Error in cleanDb.ts:", err);
        throw err;
    }
});
