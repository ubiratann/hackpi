import express, { Request, Response } from "express";
import { Categoria } from "../models/categoria/categoria";
import { CategoriaService } from '../services/categoria/categoria.service'
import * as mongoDB from "mongodb";


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
            res.status(404).send('Erro ao pesquisar categorias!');
        }
    }
    catch(error){
        res.status(404).send('Categoria não encontrada');
    }
});

categoriaRouter.get('/all', async (req: Request, res: Response)=>{
    try{
        let service = new CategoriaService();
        const query: Categoria = new Categoria(req.body)
        const response = await service.buscarLista(query);
        
        if(response){
            res.status(200).send(response);
        }
        else{
            res.status(404).send('Erro ao pesquisar categorias!');
        }
    }
    catch(error){
        res.status(404).send('Categoria não encontrada');
    }
});



// categoriaRouter.get('/all', async (req: Request, res: Response)=>{
//     try{
//         await conectar();
//         const query: Categoria = new Categoria(req.body);
        
//         const categorias = 
        
//         // await desconectar();
//         categorias.toArray((erro, result)=>{
//             if(erro) throw erro;
//             res.status(200).send(result);
//         });

//         categoriaService()
//     }
//     catch(erro){
//         console.log(erro)
//         res.status(404).send(`Nao foram encontradas categorias`);
//     }
// });

