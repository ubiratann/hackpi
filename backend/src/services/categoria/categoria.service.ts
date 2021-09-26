import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { GenericService } from "../generic/generic.service"
import { Categoria } from "../../models/categoria/categoria";

export class CategoryService extends GenericService<Categoria>{

    constructor(){
        super();
    }
    
    getCollectionName() {
        return process.env.CATEGORY_COLLECTION_NAME;
    }

    getDBName() {
        return process.env.DB_NAME;
    }
}

