import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Hobby } from '../hobby/hobby.model';
import { Property } from '../property/property.model';

@ObjectType()
@Schema({ timestamps: true })
export class Person {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => [Hobby])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Hobby.name })
  hobbies: MongooseSchema.Types.ObjectId[] | Hobby[];

  @Field(() => [Property])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Property.name })
  properties: MongooseSchema.Types.ObjectId[] | Property[];
}

export type PersonDocument = Person & Document;
export const PersonSchema = SchemaFactory.createForClass(Person);
