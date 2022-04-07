import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Document, Types } from 'mongoose';
import { Dimensao } from "src/dimensao/entities/dimensao.entity";
import { Item } from "src/item/entities/item.entity";

export type FaseDocument = Fase & Document;

@Schema({collection: "fases"})
export class Fase {
    @Prop({ type: mongoose.Schema.Types.ObjectId})
    _id: Types.ObjectId;
    
    @Prop()
    texto: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Dimensao.name })
    id_dimensao: Dimensao;

}

export const FaseSchema = SchemaFactory.createForClass(Fase);