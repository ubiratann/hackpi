import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { Client } from "../..";

export const collections : { avatar?: mongoDB.Collection } = {}


export async function conectar(): Promise<void>{
    dotenv.config();

    await  Client.connect();
    
    const db: mongoDB.Db =  Client.db(process.env.DB_NAME);

    const avatarCollection: mongoDB.Collection = db.collection(`${process.env.AVATAR_COLLECTION_NAME}`);
    collections.avatar = avatarCollection;
}


export async function desconectar(): Promise<void>{
    await Client.close();
}
