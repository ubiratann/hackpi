import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dimensao, DimensaoDocument } from './entities/dimensao.entity';
import { Model } from 'mongoose';

@Injectable()
export class DimensaoService {

  constructor(@InjectModel(Dimensao.name) private DimensaoModel: Model<DimensaoDocument>) { }

  async create(Dimensao: Dimensao): Promise<Dimensao> {
    const newDimensao = new this.DimensaoModel(Dimensao);
    return newDimensao.save();
  }

  async findAll(): Promise<Dimensao[]> {
    return await this.DimensaoModel.find().exec();
  }

  async findOne(codigo): Promise<Dimensao> {
    return await this.DimensaoModel.findOne({codigo: codigo}).exec();
  }

  async update(codigo, Dimensao: Dimensao): Promise<Dimensao> {
    return await this.DimensaoModel.findOneAndUpdate(codigo, Dimensao, { new: true })
  }

  async delete(codigo): Promise<any> {
    return await this.DimensaoModel.findOneAndDelete({codigo : codigo});
  }
}