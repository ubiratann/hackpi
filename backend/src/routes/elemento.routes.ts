import express, { Request, Response } from "express";
import { FindCursor } from "mongodb";
import { Elemento } from "../models/elemento/elemento";
import { ElementoService } from "../services/elemento/elemento.service";


export const elementoRouter = express.Router();

elementoRouter.get('/', async (req: Request, res: Response)=>{
    try{
        let service = new ElementoService();
        let filtro = new Elemento(req?.body);

        const response = await service.buscarUnico(filtro.props);
        if(response){
            res.status(200).send(response);
        }
        else{
            res.status(404).send('Elemento nao encontrado!');
        }

    }
    catch(erro)
    {
        res.status(500).send('Erro na consulta!');
    }
});


elementoRouter.get('/lista', async (req: Request, res: Response)=>{
    try{
        let service = new ElementoService();
        let filtro = new Elemento(req?.body);
        let response: FindCursor<Elemento> = await service.buscarLista(filtro.props);
        response.toArray((err, result)=>{
            if(result){
                res.status(200).send(result);
            }
            else{
                res.status(404).send('Categorias não encontradas!');
            }
        });
    }
    catch(error){
        res.status(500).send('Erro na consulta');
    }
});