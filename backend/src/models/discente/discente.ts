import { Avatar } from "../avatar/avatar";

interface IDiscente{
    id?: number;
    nome?: string;
    nivelEscolaridade?: number;
    idAvatar?: number;
    avatar?: Avatar;
    dataInclusao?: Date;
}

export class Discente{
    constructor(public props: IDiscente){}
}