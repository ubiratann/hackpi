import { Module } from '@nestjs/common';
import { DimensaoService } from './dimensao.service';
import { DimensaoController } from './dimensao.controller';

@Module({
  controllers: [DimensaoController],
  providers: [DimensaoService]
})
export class DimensaoModule {}
