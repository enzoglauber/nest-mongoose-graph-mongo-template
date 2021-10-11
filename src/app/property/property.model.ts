import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

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

  @Field(() => Date)
  @Prop({ type: MongooseSchema.Types.Date }) // https://mongoosejs.com/docs/schematypes.html
  createdAt?: string;

  @Field(() => Date)
  @Prop({ type: MongooseSchema.Types.Date })
  updatedAt?: string;

  // @Field(() => Person)
  // @Prop({ type: MongooseSchema.Types.ObjectId, ref: Person.name })
  // person: MongooseSchema.Types.ObjectId | Person;
}

export type PropertyDocument = Property & Document;
export const PropertySchema = SchemaFactory.createForClass(Property);
