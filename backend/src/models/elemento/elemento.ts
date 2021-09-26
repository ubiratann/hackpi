
interface IElemento{
    id?: number;
    descricao?: number;
    nivelEscolaridade?: number;
    dataInclusao?: Date;
}

export class Elemento{
    constructor(public props: IElemento){}
}