import { Discente } from "../discente/discente";
import { Elemento } from "../elemento/elemento";

export interface Resposta{
    id: number;
    idElemento: number;
    elemento: Elemento;
    idDiscente: number;
    discente: Discente;
    dataInclusao: Date;
}