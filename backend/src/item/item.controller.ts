import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { ItemService } from './item.service';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) { }

  @Post()
  async createItem(@Res() response, @Body() Item: Item) {
    const newItem = await this.itemService.create(Item);
    return response.status(HttpStatus.CREATED).json({
      newItem
    })
  }

  @Get()
  async fetchAll(@Res() response) {
    const items = await this.itemService.findAll();
    return response.status(HttpStatus.OK).json({
      items
    })
  }

  @Get('/:codigo')
  async findById(@Res() response, @Param('codigo') codigo) {
    const items = await this.itemService.findOne(codigo);
    return response.status(HttpStatus.OK).json({
      items
    })
  }


  @Put('/:codigo')
  async update(@Res() response, @Param('codigo') codigo, @Body() Item: Item) {
    const updatedItem = await this.itemService.update(codigo, Item);
    return response.status(HttpStatus.OK).json({
      updatedItem
    })
  }

  @Delete('/:codigo')
  async delete(@Res() response, @Param('codigo') codigo) {
    const deletedItem = await this.itemService.delete(codigo);
    return response.status(HttpStatus.OK).json({
      deletedItem
    })
  }
}