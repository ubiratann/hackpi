import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvatarModule } from './avatar/avatar.module';
import { configService } from './config/config.service';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    AvatarModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
