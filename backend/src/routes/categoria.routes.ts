import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/categoria/categoria.service";
import { Categoria } from "../models/categoria/categoria";

export const categoriaRouter = express.Router();

categoriaRouter.use(express.json())

categoriaRouter.get('/', async (req: Request, res: Response)=>{
    const id = req?.params?.id;

    try{
        const query = {_id: new ObjectId(id)}
        const categoria = (await collections.categoria?.findOne(query)) as Categoria;
        
        if(categoria){
            res.status(200).send(categoria);
        }
    }
    catch(erro){
        res.status(404).send(`Nao foi encontrada uma categoria com o codigo: ${req.params.id}`);
    }
});