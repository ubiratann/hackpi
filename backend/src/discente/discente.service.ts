import { Injectable } from '@nestjs/common';
import { CreateDiscenteDto } from './dto/create-discente.dto';
import { UpdateDiscenteDto } from './dto/update-discente.dto';

@Injectable()
export class DiscenteService {
  create(createDiscenteDto: CreateDiscenteDto) {
    return 'This action adds a new discente';
  }

  findAll() {
    return `This action returns all discente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} discente`;
  }

  update(id: number, updateDiscenteDto: UpdateDiscenteDto) {
    return `This action updates a #${id} discente`;
  }

  remove(id: number) {
    return `This action removes a #${id} discente`;
  }
}
