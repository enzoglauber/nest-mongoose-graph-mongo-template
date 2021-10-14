import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Person, PersonSchema } from './person.model';
import { PersonResolver } from './person.resolver';
import { PersonService } from './person.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
  ],
  providers: [PersonService, PersonResolver],
  exports: [PersonService]
})
export class PersonModule {}
