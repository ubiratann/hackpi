import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections : { categoria?: mongoDB.Collection } = {}

export async function connect(){
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(`${process.env.DB_CONST_STRING}`)
    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const categoriaCollection: mongoDB.Collection = db.collection(`${process.env.CATEGORIA_COLLECTION_NAME}`);
    collections.categoria = categoriaCollection;
    
}