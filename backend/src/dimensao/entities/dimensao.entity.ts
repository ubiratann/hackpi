import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type DimensaoDocument = Dimensao & Document;

@Schema({collection: "dimensoes"})
export class Dimensao {
    @Prop()
    _id: number;
    
    @Prop()
    descricao: string;
    
    @Prop()
    imagem: string;

}

export const DimensaoSchema = SchemaFactory.createForClass(Dimensao);