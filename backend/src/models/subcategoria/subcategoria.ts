import { Categoria } from "../categoria/categoria";

export interface Subcategoria{
    id: number;
    idCategoria: number;
    categoria: Categoria;
    nome: string;
    dataInclusao: Date;
}