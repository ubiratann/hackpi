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
import { FaseModule } from './fase/fase.module';
import { ItemModule } from './item/item.module';
import { Fase, FaseSchema } from './fase/entities/fase.entity';
import { Item, ItemSchema } from './item/entities/item.entity';
import { FaseController } from './fase/fase.controller';
import { ItemController } from './item/item.controller';
import { FaseService } from './fase/fase.service';
import { ItemService } from './item/item.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/hackpi'),
            MongooseModule.forFeature([
                {name: Pergunta.name, schema: PerguntaSchema},
                {name: Dimensao.name, schema: DimensaoSchema},
                {name: Fase.name, schema: FaseSchema},
                {name: Item.name, schema: ItemSchema}  
            ])
          ],
  controllers: [AppController, PerguntaController, DimensaoController, FaseController, ItemController], 
  providers: [AppService, PerguntaService, DimensaoService, FaseService, ItemService],
})
export class AppModule {}