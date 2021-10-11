import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';


@InputType()
export class CreatePropertyInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => [Number], { nullable: true })
  location: number[];

  @Field(() => String, { nullable: true })
  person: MongooseSchema.Types.ObjectId;
}

@InputType()
export class ListPropertyInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => [Number], { nullable: true })
  location?: number[];

  @Field(() => String, { nullable: true })
  person?: MongooseSchema.Types.ObjectId;

  @Field(() => Date, { nullable: true })
  createdAt?: string;

  @Field(() => Date, { nullable: true })
  updatedAt?: string;
}

@InputType()
export class UpdatePropertyInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => [Number], { nullable: true })
  location?: number[];

  @Field(() => String, { nullable: true })
  person?: MongooseSchema.Types.ObjectId;
}
