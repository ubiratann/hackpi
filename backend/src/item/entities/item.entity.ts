import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Document, Types } from 'mongoose';
import { Dimensao } from "src/dimensao/entities/dimensao.entity";

export type ItemDocument = Item & Document;

@Schema({collection: "itens"})
export class Item {
    @Prop({ type: mongoose.Schema.Types.ObjectId})
    _id: Types.ObjectId;
    
    @Prop()
    nome: string;
    
    @Prop()
    img: string;
    
    @Prop()
    descricao: string;
    
    @Prop()
    tipo: number;

}

export const ItemSchema = SchemaFactory.createForClass(Item);