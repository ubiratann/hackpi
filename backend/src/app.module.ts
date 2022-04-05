import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pergunta, PerguntaSchema } from './pergunta/entities/pergunta.entity';
import { PerguntaController } from './pergunta/pergunta.controller';
import { PerguntaService } from './pergunta/pergunta.service';
import { DimensaoController } from './dimensao/dimensao.controller';
import { DimensaoService } from './dimensao/dimensao.service';
import { Dimensao, DimensaoSchema } from './dimensao/entities/dimensao.entity';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/hackpi'),
            MongooseModule.forFeature([
                {name: Pergunta.name, schema: PerguntaSchema},
                {name: Dimensao.name, schema: DimensaoSchema}  
            ]),
          ],
  controllers: [AppController, PerguntaController, DimensaoController], 
  providers: [AppService, PerguntaService, DimensaoService],
})
export class AppModule {}