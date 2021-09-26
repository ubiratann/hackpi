import { Discente } from "../discente/discente";

interface IAvatar{
    id: number,
    imagem: string;
    idDiscente: number;
    dataInclusao: Date;
}


export class Avatar{
    constructor(public props : IAvatar ){}
}