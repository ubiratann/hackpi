import express, { Request, Response } from "express";
import { Resposta } from "../models/resposta/resposta";
import { RespostaService } from "../services/reposta/resposta.service";


export const RespostaRouter = express.Router();

RespostaRouter.get('/', async (req: Request, res: Response)=>{
    try{
        let service = new RespostaService();
        let filtro = new Resposta(req?.body);

        const response = await service.buscarUnico(filtro.props);
        if(response){
            res.status(200).send(response);
        }
        else{
            res.status(404).send('Resposta nao encontrado!');
        }

    }
    catch(erro)
    {
        res.status(500).send('Erro na consulta!');
    }
});


RespostaRouter.get('/lista', async (req: Request, res: Response)=>{
    try{
        let service = new RespostaService();
        let filtro = new Resposta(req?.body);

        const response = await service.buscarLista(filtro);
        
        if(response){
            res.status(200).send(response);
        }
        else{
            res.status(404).send('Respostas não encontrados!');
        }
    }
    catch(error){
        res.status(500).send('Erro na consulta');
    }
});


RespostaRouter.post('/inserir', async (req: Request, res: Response)=>{
    try{
        let service = new RespostaService();
        let filtro = new Resposta(req?.body);

        const response = await service.inserirUnico(filtro);
        
    }
    catch(error){
        res.status(500).send('Erro na consulta');
    }
});