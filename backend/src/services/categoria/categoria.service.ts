import { GenericoService } from "../generico/generico.service"
import { Categoria } from "../../models/categoria/categoria";

export class CategoriaService extends GenericoService<Categoria>{

    getNomeColecao(){
        return process.env.COLECAO_CATEGORIA;
    }

    getNomeBanco() {
        return process.env.NOME_BANCO;
    }
}

