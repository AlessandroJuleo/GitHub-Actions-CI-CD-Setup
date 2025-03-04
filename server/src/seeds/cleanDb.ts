import models from "../models/index.js";
import db from "../config/connection.js";

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];

    if (!model || !model.db || !model.db.db) {
      throw new Error(`Model ${modelName} is not properly initialized.`);
    }

    const collections = await model.db.db.listCollections({
      name: collectionName,
    }).toArray();

    if (collections.length > 0) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    console.error("Error in cleanDb.ts:", err);
    throw err;
  }
};
