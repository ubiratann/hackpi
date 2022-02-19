import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RespostaModule } from './resposta/resposta.module';
import { DiscenteModule } from './discente/discente.module';
import { ElementoModule } from './elemento/elemento.module';
import { CategoriaModule } from './categoria/categoria.module';
import { AvatarModule } from './avatar/avatar.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    RespostaModule, 
    DiscenteModule, 
    ElementoModule, 
    CategoriaModule, 
    AvatarModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
