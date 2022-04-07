import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pergunta, PerguntaDocument } from './entities/pergunta.entity';
import { Model } from 'mongoose';

@Injectable()
export class PerguntaService {

  constructor(@InjectModel(Pergunta.name) private PerguntaModel: Model<PerguntaDocument>) { }

  async create(Pergunta: Pergunta): Promise<Pergunta> {
    const newPergunta = new this.PerguntaModel(Pergunta);
    return newPergunta.save();
  }

  async findAll(): Promise<Pergunta[]> {
    return await this.PerguntaModel.find()
                                   .populate("id_dimensao")
                                   .populate("id_fase")
                                   .populate("itens")
                                   .exec();
  }

  async findOne(id): Promise<Pergunta> {
    return await this.PerguntaModel.findById(id).exec();
  }

  async findByDimensao(idDimensao): Promise<Pergunta> {
    return await this.PerguntaModel.findOne({dimemensao: idDimensao}).exec();
  }

  async update(id, Pergunta: Pergunta): Promise<Pergunta> {
    return await this.PerguntaModel.findByIdAndUpdate(id, Pergunta, { new: true })
  }

  async delete(id): Promise<any> {
    return await this.PerguntaModel.findByIdAndRemove(id);
  }
}