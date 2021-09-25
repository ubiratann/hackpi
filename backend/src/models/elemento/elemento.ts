import { NivelEscolaridade } from "../nivel-escolaridade/nivel-escolaridade";

export interface Elemento{
    id: number;
    descricao: number;
    idNivelEscolaridade: number;
    nivelEscolaridade: NivelEscolaridade
    dataInclusao: Date;
}