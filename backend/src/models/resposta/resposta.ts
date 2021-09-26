import { Categoria } from "../categoria/categoria";
import { Discente } from "../discente/discente";
import { Elemento } from "../elemento/elemento";

interface IResposta{
    categoria?: Categoria;
    discente?: Discente;
    elemento?: Elemento;
    afirmativa?: boolean;
    dataInclusao?: Date;
}

export class Resposta{
    constructor(public props: IResposta){}
}