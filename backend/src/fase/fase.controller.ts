import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { Fase } from './entities/fase.entity';
import { FaseService } from './fase.service';

@Controller('fases')
export class FaseController {
  constructor(private readonly faseService: FaseService) { }

  @Post()
  async createFase(@Res() response, @Body() Fase: Fase) {
    const newFase = await this.faseService.create(Fase);
    return response.status(HttpStatus.CREATED).json({
      newFase
    })
  }

  @Get()
  async fetchAll(@Res() response) {
    const fases = await this.faseService.findAll();
    return response.status(HttpStatus.OK).json({
      fases
    })
  }

  @Get('/:codigo')
  async findById(@Res() response, @Param('codigo') codigo) {
    const fases = await this.faseService.findOne(codigo);
    return response.status(HttpStatus.OK).json({
      fases
    })
  }

  @Get('/dimensao/:codigo')
  async findByDimensao(@Res() response, @Param('codigo') codigo) {
    const Fase = await this.faseService.findByDimensao(codigo);
    return response.status(HttpStatus.OK).json({
      Fase
    })
  }

  @Put('/:codigo')
  async update(@Res() response, @Param('codigo') codigo, @Body() Fase: Fase) {
    const updatedFase = await this.faseService.update(codigo, Fase);
    return response.status(HttpStatus.OK).json({
      updatedFase
    })
  }

  @Delete('/:codigo')
  async delete(@Res() response, @Param('codigo') codigo) {
    const deletedFase = await this.faseService.delete(codigo);
    return response.status(HttpStatus.OK).json({
      deletedFase
    })
  }
}