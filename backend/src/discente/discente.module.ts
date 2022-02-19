import { Module } from '@nestjs/common';
import { DiscenteService } from './discente.service';
import { DiscenteController } from './discente.controller';

@Module({
  controllers: [DiscenteController],
  providers: [DiscenteService]
})
export class DiscenteModule {}
