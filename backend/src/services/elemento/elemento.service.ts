import { GenericoService } from "../generico/generico.service";
import { Elemento } from "../../models/elemento/elemento";

export class ElementoService extends GenericoService<Elemento>{

    getNomeColecao(){
        return process.env.COLECAO_ELEMENTO;
    }

    getNomeBanco(){
        return process.env.NOME_BANCO;
    }
}