import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AvatarDto } from './dto/avatar.dto';
import { Avatar } from './entities/avatar.entity';

@Injectable()
export class AvatarService {

  constructor(@InjectRepository(Avatar) private readonly repo: Repository<Avatar>) { 
  }

  // create(createAvatarDto: AvatarDto) {
  //   return 'This action adds a new avatar';
  // }

  // async findAll() {
  //   return await this.repo.find().then( avatars => avatars.map(avatar => AvatarDto.fromEntity(avatar)));
  // }

  // async findOne(id: number) {
  //   return await this.repo.findOne({ id: id }).then( avatar => AvatarDto.fromEntity(avatar));
  // }

  // async update(id: number, updateAvatarDto: AvatarDto) {
  //   return await this.repo.update(id , updateAvatarDto);
  // }

  // async remove(id: number) {
  //   return await this.repo.remove([]);
  // }
}
