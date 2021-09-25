import { Discente } from "../discente/discente";

export interface Avatar{
    id: number,
    imagem: string;
    idDiscente: number;
    discente: Discente;
    dataInclusao: Date;

}