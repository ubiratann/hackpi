import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Types, Document } from 'mongoose';

export type DimensaoDocument = Dimensao & Document;

@Schema({collection: "dimensoes"})
export class Dimensao {
    @Prop({ type: mongoose.Schema.Types.ObjectId})
    _id: Types.ObjectId;
    
    @Prop()
    nome: string;

}

export const DimensaoSchema = SchemaFactory.createForClass(Dimensao);