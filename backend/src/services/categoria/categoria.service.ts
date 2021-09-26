import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { GenericoService } from "../generico/generico.service"
import { Categoria } from "../../models/categoria/categoria";

export class CategoriaService extends GenericoService<Categoria>{

    constructor(){
        super();
    }
    
    getNomeColecao(){
        return process.env.COLECAO_CATEGORIA;
    }

    getNomeBanco() {
        return process.env.NOME_BANCO;
    }
}

