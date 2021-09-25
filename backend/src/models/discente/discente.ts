import { Avatar } from "../avatar/avatar";
import { NivelEscolaridade } from "../nivel-escolaridade/nivel-escolaridade";

export interface Discente{
    id: number;
    nome: string;
    idNivelEscolaridade: number;
    nivelEscolaridade: NivelEscolaridade;
    idAvatar: number;
    avatar: Avatar;
    dataInclusao: Date;

}