import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Document, Types } from 'mongoose';
import { Dimensao } from "src/dimensao/entities/dimensao.entity";
import { Fase } from "src/fase/entities/fase.entity";
import { Item } from "src/item/entities/item.entity";

export type PerguntaDocument = Pergunta & Document;

@Schema({collection: "perguntas"})
export class Pergunta {
    @Prop({ type: mongoose.Schema.Types.ObjectId})
    _id: Types.ObjectId;
    
    @Prop()
    texto: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Dimensao.name })
    id_dimensao: Dimensao;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Fase.name })
    id_fase: Fase;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Item.name }])
    itens: Item[];
}

export const PerguntaSchema = SchemaFactory.createForClass(Pergunta);