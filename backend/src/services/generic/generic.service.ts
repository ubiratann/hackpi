import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { Client } from "../..";
import { FindCursor } from "mongodb";


export class GenericService<Entity>{
    
    constructor(){
        dotenv.config();
    }

    /** 
     * Create connection with database and returns a collection
     * 
    */
    async  connect(): Promise<mongoDB.Collection<mongoDB.Document>>{
        const conection = await  Client.connect();
        const db: mongoDB.Db =  conection.db(`${this.getDBName()}`);
        return db.collection(`${this.getCollectionName()}`);   
    }

    /**
     * Get a single record of database
     * @param query  A entity instance of mongo collection used as filter 
     * @returns A single mongo instance of collection or null
     */
    async getOne(query: {}): Promise<mongoDB.Document | null>{
        return await (await this.connect()).findOne(query);
    }

    /**
     * Get a list of records of database
     * @param query  A entity instance of mongo collection used as filter 
     * @returns A array of of collections 
     */
    async getAll(query: {}): Promise<FindCursor<Entity> | void>{
        try{
            let response = (await this.connect()).find(query) as FindCursor<Entity>;
            response.toArray((err, result)=>{
                if(err) throw err;
                return result;
            });
            
        }catch(error)
        {
            throw error;
        }
    }

    /**
     * Insert a record on database
     * @param entity  A entity instance there be persisted
     * 
     */
    async insert(entity: Entity){

    }

    /**
     * Get the name of collection in context
     * 
     * @return The name of collectio or null
    */
    getCollectionName() : string | void {}

    /**
     * Get the name of database in context
     * 
     * @return The name of database or null
    */
    getDBName(): string | void{}
    
}
