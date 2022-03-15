import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvatarService } from './avatar.service';
import { AvatarDto } from './dto/avatar.dto';

@Controller('avatar')
export class AvatarController {

  // constructor(private readonly avatarService: AvatarService) {}

  // @Post()
  // async create(@Body() avatarDto: AvatarDto) {
  //   return await this.avatarService.create(avatarDto);
  // }

  // @Get()
  // async findAll() {
  //   return await this.avatarService.findAll();
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: number) {
  //   return await this.avatarService.findOne(id);
  // }

  // @Patch(':id')
  // async update(@Param('id') id: number, @Body() avatarDto: AvatarDto) {
  //   return await this.avatarService.update(id, avatarDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: number) {
  //   return await this.avatarService.remove(id);
  // }
}
