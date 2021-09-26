import express, { Request, Response } from "express";
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

        const response = await service.buscarLista(filtro);
        
        if(response){
            res.status(200).send(response);
        }
        else{
            res.status(404).send('Elementos não encontrados!');
        }
    }
    catch(error){
        res.status(500).send('Erro na consulta');
    }
});