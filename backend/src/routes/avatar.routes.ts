import { Avatar } from "../models/avatar/avatar";
import { AvatarService } from "../services/avatar/avatar.service";
import express, { Request, Response } from "express";

export const AvatarRouter = express.Router();

AvatarRouter.get('/', async (req: Request, res: Response)=>{
    try{
        let service = new AvatarService();
        let filtro = new Avatar(req?.body);

        const response = await service.buscarUnico(filtro.props);
        if(response){
            res.status(200).send(response);
        }
        else{
            res.status(404).send('Avatar nao encontrado!');
        }

    }
    catch(erro)
    {
        res.status(500).send('Erro na consulta!');
    }
});


AvatarRouter.get('/lista', async (req: Request, res: Response)=>{
    try{
        let service = new AvatarService();
        let filtro = new Avatar(req?.body);

        const response = await service.buscarLista(filtro);
        
        if(response){
            res.status(200).send(response);
        }
        else{
            res.status(404).send('Avatars não encontrados!');
        }
    }
    catch(error){
        res.status(500).send('Erro na consulta');
    }
});