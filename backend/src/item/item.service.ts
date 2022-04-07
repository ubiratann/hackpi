import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from './entities/item.entity';
import { Model } from 'mongoose';

@Injectable()
export class ItemService {

  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) { }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return newItem.save();
  }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(id): Promise<Item> {
    return await this.itemModel.findById(id).exec();
  }

  async update(id, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true })
  }

  async delete(id): Promise<any> {
    return await this.itemModel.findByIdAndRemove(id);
  }
}