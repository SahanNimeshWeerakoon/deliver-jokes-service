import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { JokesService } from './jokes/jokes.service';
import { JokesController } from './jokes/jokes.controller';

@Module({
  imports: [],
  controllers: [AppController, JokesController],
  providers: [AppService, JokesService],
})
export class AppModule {}
