import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { Client } from "../..";

export const collections : { discente?: mongoDB.Collection } = {}


export async function conectar(): Promise<void>{
    dotenv.config();

    await  Client.connect();
    
    const db: mongoDB.Db =  Client.db(process.env.DB_NAME);

    const discenteCollection: mongoDB.Collection = db.collection(`${process.env.DISCENTE_COLLECTION_NAME}`);
    collections.discente = discenteCollection;
}


export async function desconectar(): Promise<void>{
    await Client.close();
}
