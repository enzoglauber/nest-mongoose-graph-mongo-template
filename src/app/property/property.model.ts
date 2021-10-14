import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Person } from '../person/person.model';

@ObjectType()
@Schema({timestamps: true})
export class Property {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ required: true })
  name: string;

  @Field(() => String)
  @Prop()
  address: string;

  @Field(() => [Number])
  @Prop({ index: "2d", required: true })
  location: number[];

  @Field(() => Person)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Person.name })
  person: MongooseSchema.Types.ObjectId | Person;

  @Field(() => Date)
  @Prop({ type: MongooseSchema.Types.Date }) // https://mongoosejs.com/docs/schematypes.html
  createdAt?: string;

  @Field(() => Date)
  @Prop({ type: MongooseSchema.Types.Date })
  updatedAt?: string;


}

export type PropertyDocument = Property & Document;
export const PropertySchema = SchemaFactory.createForClass(Property);
