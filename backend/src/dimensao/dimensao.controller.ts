import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { Dimensao } from './entities/dimensao.entity';
import { DimensaoService } from './dimensao.service';

@Controller('dimensoes')
export class DimensaoController {
  constructor(private readonly DimensaoService: DimensaoService) { }

  @Post()
  async createDimensao(@Res() response, @Body() Dimensao: Dimensao) {
    const newDimensao = await this.DimensaoService.create(Dimensao);
    return response.status(HttpStatus.CREATED).json({
      newDimensao
    })
  }

  @Get()
  async fetchAll(@Res() response) {
    const Dimensoes = await this.DimensaoService.findAll();
    return response.status(HttpStatus.OK).json({
      Dimensoes
    })
  }

  @Get('/:codigo')
  async findById(@Res() response, @Param('codigo') codigo) {
    const Dimensao = await this.DimensaoService.findOne(+codigo);
    return response.status(HttpStatus.OK).json({
      Dimensao
    })
  }

  @Put('/:codigo')
  async update(@Res() response, @Param('codigo') codigo, @Body() Dimensao: Dimensao) {
    const updatedDimensao = await this.DimensaoService.update({codigo : codigo}, Dimensao);
    return response.status(HttpStatus.OK).json({
      updatedDimensao
    })
  }

  @Delete('/:codigo')
  async delete(@Res() response, @Param('codigo') codigo) {
    const deletedDimensao = await this.DimensaoService.delete({codigo : codigo});
    return response.status(HttpStatus.OK).json({
      deletedDimensao
    })
  }
}