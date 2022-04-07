import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Fase, FaseDocument } from './entities/fase.entity';
import { Model } from 'mongoose';

@Injectable()
export class FaseService {

  constructor(@InjectModel(Fase.name) private faseModel: Model<FaseDocument>) { }

  async create(fase: Fase): Promise<Fase> {
    const newFase = new this.faseModel(fase);
    return newFase.save();
  }

  async findAll(): Promise<Fase[]> {
    return await this.faseModel.find().populate("itens").exec();
  }

  async findOne(id): Promise<Fase> {
    return await this.faseModel.findById(id).exec();
  }

  async findByDimensao(idDimensao): Promise<Fase> {
    return await this.faseModel.findOne({id_dimensao: idDimensao}).exec();
  }

  async update(id, fase: Fase): Promise<Fase> {
    return await this.faseModel.findByIdAndUpdate(id, fase, { new: true })
  }

  async delete(id): Promise<any> {
    return await this.faseModel.findByIdAndRemove(id);
  }
}