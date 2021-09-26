import express, { Request, Response } from "express";
import { Categoria } from "../models/categoria/categoria";
import { CategoriaService } from '../services/categoria/categoria.service'

export const categoriaRouter = express.Router();


categoriaRouter.get('/', async (req: Request, res: Response)=>{
    try{
        let service = new CategoriaService();
        const categoria: Categoria = new Categoria(req.body)
        
        const response = await service.buscarUnico(categoria.props);
        
        if(response){
            res.status(200).send(response);
        }
        else{
            res.status(404).send('Categoria não encontrada!');
        }
    }
    catch(error){
        res.status(500).send('Erro na consulta');
    }
});

categoriaRouter.get('/lista', async (req: Request, res: Response)=>{
    try{
        let service = new CategoriaService();
        const query: Categoria = new Categoria(req.body)
        const response = await service.buscarLista(query);
        
        if(response){
            res.status(200).send(response);
        }
        else{
            res.status(404).send('Categorias não encontradas!');
        }
    }
    catch(error){
        res.status(500).send('Erro na consulta!');
    }
});
