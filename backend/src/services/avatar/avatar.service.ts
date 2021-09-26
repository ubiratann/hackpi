import { GenericoService } from "../generico/generico.service";
import { Avatar } from "../../models/avatar/avatar";

export class AvatarService extends GenericoService<Avatar>{

    getNomeColecao(){
        return process.env.COLECAO_AVATAR
    }

    getNomeBanco(){
        return process.env.NOME_BANCO;
    }

}