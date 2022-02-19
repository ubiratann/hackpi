import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiscenteService } from './discente.service';
import { CreateDiscenteDto } from './dto/create-discente.dto';
import { UpdateDiscenteDto } from './dto/update-discente.dto';

@Controller('discente')
export class DiscenteController {
  constructor(private readonly discenteService: DiscenteService) {}

  @Post()
  create(@Body() createDiscenteDto: CreateDiscenteDto) {
    return this.discenteService.create(createDiscenteDto);
  }

  @Get()
  findAll() {
    return this.discenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discenteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscenteDto: UpdateDiscenteDto) {
    return this.discenteService.update(+id, updateDiscenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discenteService.remove(+id);
  }
}
