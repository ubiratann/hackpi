import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Document } from 'mongoose';
import { Dimensao } from "src/dimensao/entities/dimensao.entity";

export type PerguntaDocument = Pergunta & Document;

@Schema({collection: "perguntas"})
export class Pergunta {
    @Prop()
    _id: number;
    
    @Prop()
    texto: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Dimensao' })
    dimensao: Dimensao;

}

export const PerguntaSchema = SchemaFactory.createForClass(Pergunta);