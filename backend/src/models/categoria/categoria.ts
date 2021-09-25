import { NivelEscolaridade } from "../nivel-escolaridade/nivel-escolaridade";
import {ObjectId} from "mongodb"

export  class Categoria{
    
    constructor(
        public nome: string,
        public imagem : string,
        public descricao: string,
        public dataInclusap: Date,
        public idNivelEscolaridade: number,
        public nivelEscolaridade: NivelEscolaridade,
        public dataInclusao: Date,
        public id?: ObjectId
    ){}

}