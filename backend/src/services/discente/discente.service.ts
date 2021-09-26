import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { Client } from "../..";
import { GenericoService } from "../generico/generico.service";
import { Discente } from "../../models/discente/discente";

export class DiscenteService extends GenericoService<Discente>{

    getNomeColecao(){
        return process.env.COLECAO_DISCENTE;
    }

    getNomeBanco(){
        return process.env.NOME_BANCO;
    }
}