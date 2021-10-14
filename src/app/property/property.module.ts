import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Property, PropertySchema } from './property.model';
import { PropertyResolver } from './property.resolver';
import { PropertyService } from './property.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Property.name, schema: PropertySchema }])
  ],
  providers: [PropertyService, PropertyResolver],
})
export class PropertyModule {}
