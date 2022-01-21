import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { Client } from "../..";
import { FindCursor } from "mongodb";


export class GenericoService<Entity>{
    
    constructor(){
        dotenv.config();
    }

    /** 
     * Cria uma conexão com o banco de dados
     * @returns  Referência para uma coleção no banco
    */
    async  getConexao(): Promise<mongoDB.Collection<mongoDB.Document>>{
        try{
            const conexao = await  Client.connect();
            const db: mongoDB.Db =  conexao.db(`${this.getNomeBanco()}`);
            return db.collection(`${this.getNomeColecao()}`);   
        }
        catch(erro){
            throw erro;
        }
    }

    /**
     * Busca o primeiro registro no banco de acordo com o filtro
     * @param query  Entidade mapeada da coleção, que serve de filtro
     * @returns O primeiro registro encontrado que se encaixa no filtro
     */
    async buscarUnico(query:{} ): Promise<mongoDB.Document | null>{
        try{
            const response =  await (await this.getConexao()).findOne(query);
            return response;
        }
        catch(erro){
            throw erro;
        }
    }

    /**
     * Busca uma lista com base em um filtro
     * @param query  Entidade mapeada da coleção, que serve de filtro
     * @returns Uma lista com os registros que se encaixaram on filtro
     */
    async buscarLista(query:{} ): Promise<FindCursor<Entity>>{
        try{
            let response =  await (await this.getConexao()).find(query) as FindCursor<Entity>;
            // response.toArray((err, result)=>{
            //     if(err) throw err;
            //     return result;
            // });
            return response;
        }
        catch(erro){
            throw erro;
        }
    }

    /**
     * Insere um registro no banco
     * @param entity  Entitdade que vai ser persistida no banco
     * 
    */
    async inserirUnico(entity: mongoDB.Document ): Promise<mongoDB.Document | null>{
        try{
            return await (await this.getConexao()).insertOne(entity);
        }
        catch(erro){
            throw erro;
        }
    }

    /**
     * Insere uma lista de registros no banco
     * @param entity  Lista de entidades a serem persistidas
     * 
    */
    async inserirLista(entity: mongoDB.Collection<mongoDB.Document>[] ): Promise<mongoDB.Document | null>{
        try{
            return await (await this.getConexao()).insertMany(entity);
        }
        catch(erro){
            throw erro;
        }
    }

    /**
     * 
     * @return O nome da coleção em contexto
    */
    getNomeColecao() : string | void {}

    /**
     * 
     * 
     * @return String com nome do banco em contexto
    */
    getNomeBanco(): string | void{}
    
}
