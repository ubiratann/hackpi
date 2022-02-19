import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvatarService } from './avatar.service';
import { CreateAvatarDto } from './dto/create-avatar.dto';
import { UpdateAvatarDto } from './dto/update-avatar.dto';

@Controller('avatar')
export class AvatarController {
  constructor(private readonly avatarService: AvatarService) {}

  @Post()
  async create(@Body() createAvatarDto: CreateAvatarDto) {
    return await this.avatarService.create(createAvatarDto);
  }

  @Get()
  async findAll() {
    return await this.avatarService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.avatarService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateAvatarDto: UpdateAvatarDto) {
    return await this.avatarService.update(id, updateAvatarDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.avatarService.remove(id);
  }
}
