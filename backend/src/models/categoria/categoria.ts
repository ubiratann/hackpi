import { NivelEscolaridade } from "../nivel-escolaridade/nivel-escolaridade";
import {ObjectId} from "mongodb"


interface ICategoria{
  id?: ObjectId,
  nome?: string,
  imagem? : string,
  descricao?: string,
  nivelEscolaridade?: number,
  dataInclusao?: Date
}

export  class Categoria{
    
  constructor( public props: ICategoria){}

}