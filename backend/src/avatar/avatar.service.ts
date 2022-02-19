import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAvatarDto } from './dto/create-avatar.dto';
import { UpdateAvatarDto } from './dto/update-avatar.dto';
import { Avatar } from './entities/avatar.entity';

@Injectable()
export class AvatarService {

  constructor(@InjectRepository(Avatar) private readonly repo: Repository<Avatar>) { }

  create(createAvatarDto: CreateAvatarDto) {
    return 'This action adds a new avatar';
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    return await this.repo.findOne({ id: id });
  }

  async update(id: number, updateAvatarDto: UpdateAvatarDto) {
    return await this.repo.update(id , updateAvatarDto);
  }

  async remove(id: number) {
    return await this.repo.remove([]);
  }
}
