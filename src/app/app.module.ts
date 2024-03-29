import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import GraphQL from './graphql.config';
import { HobbyModule } from './hobby/hobby.module';
import Mongoose from './mongoose.config';
import { PersonModule } from './person/person.module';
import { PropertyModule } from './property/property.module';


@Module({
  imports: [
    GraphQL,
    Mongoose,
    PersonModule,
    HobbyModule,
    PropertyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
