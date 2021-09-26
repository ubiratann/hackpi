import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { Client } from "../..";

export const collections : { item?: mongoDB.Collection } = {}


export async function conectar(): Promise<void>{
    dotenv.config();

    await  Client.connect();
    
    const db: mongoDB.Db =  Client.db(process.env.DB_NAME);

    const itemCollection: mongoDB.Collection = db.collection(`${process.env.ITEM_COLLECTION_NAME}`);
    collections.item = itemCollection;
}


export async function desconectar(): Promise<void>{
    await Client.close();
}
