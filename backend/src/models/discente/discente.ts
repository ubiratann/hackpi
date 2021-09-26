import { Avatar } from "../avatar/avatar";
import { NivelEscolaridade } from "../nivel-escolaridade/nivel-escolaridade";

interface IDiscente{
    id?: number;
    nome?: string;
    idNivelEscolaridade?: number;
    nivelEscolaridade?: NivelEscolaridade;
    idAvatar?: number;
    avatar?: Avatar;
    dataInclusao?: Date;
}

export class Discente{
    constructor(public props: IDiscente){}
}