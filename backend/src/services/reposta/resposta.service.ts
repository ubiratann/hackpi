import express, { Request, Response } from "express";
import { Resposta } from "../../models/resposta/resposta";
import { GenericoService } from "../generico/generico.service";

export class RespostaService extends GenericoService<Resposta>{

    getNomeColecao(){
        return process.env.COLECAO_RESPOSTA;
    }

    getNomeBanco(){
        return process.env.NOME_BANCO;
    }
}
