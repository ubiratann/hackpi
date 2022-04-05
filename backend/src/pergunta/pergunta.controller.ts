import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { Pergunta } from './entities/pergunta.entity';
import { PerguntaService } from './pergunta.service';

@Controller('perguntas')
export class PerguntaController {
  constructor(private readonly PerguntaService: PerguntaService) { }

  @Post()
  async createPergunta(@Res() response, @Body() Pergunta: Pergunta) {
    const newPergunta = await this.PerguntaService.create(Pergunta);
    return response.status(HttpStatus.CREATED).json({
      newPergunta
    })
  }

  @Get()
  async fetchAll(@Res() response) {
    const Perguntas = await this.PerguntaService.findAll();
    return response.status(HttpStatus.OK).json({
      Perguntas
    })
  }

  @Get('/:codigo')
  async findById(@Res() response, @Param('codigo') codigo) {
    const Pergunta = await this.PerguntaService.findOne(codigo);
    return response.status(HttpStatus.OK).json({
      Pergunta
    })
  }

  @Get('/dimensao/:codigo')
  async findByDimensao(@Res() response, @Param('codigo') codigo) {
    const Pergunta = await this.PerguntaService.findByDimensao(codigo);
    return response.status(HttpStatus.OK).json({
      Pergunta
    })
  }

  @Put('/:codigo')
  async update(@Res() response, @Param('codigo') codigo, @Body() Pergunta: Pergunta) {
    const updatedPergunta = await this.PerguntaService.update(codigo, Pergunta);
    return response.status(HttpStatus.OK).json({
      updatedPergunta
    })
  }

  @Delete('/:codigo')
  async delete(@Res() response, @Param('codigo') codigo) {
    const deletedPergunta = await this.PerguntaService.delete(codigo);
    return response.status(HttpStatus.OK).json({
      deletedPergunta
    })
  }
}