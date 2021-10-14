import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { Person } from '../person/person.model';
import { CreatePropertyInput, ListPropertyInput, UpdatePropertyInput } from './property.inputs';
import { Property, PropertyDocument } from './property.model';
import { PropertyService } from './property.service';

@Resolver(() => Property)
export class PropertyResolver {
  constructor(
    private propertyService: PropertyService
  ) {}

  @Query(() => Property)
  async property(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.propertyService.getById(_id);
  }

  @Query(() => [Property])
  async properties(@Args('filters', { nullable: true }) filters?: ListPropertyInput) {
    return this.propertyService.list(filters);
  }

  @Mutation(() => Property)
  async createProperty(@Args('payload') payload: CreatePropertyInput) {
    return this.propertyService.create(payload);
  }

  @Mutation(() => Property)
  async updateProperty(@Args('payload') payload: UpdatePropertyInput) {
    return this.propertyService.update(payload);
  }

  @Mutation(() => Property)
  async deleteProperty(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.propertyService.delete(_id);
  }

  @ResolveField()
  async person(
    @Parent() property: PropertyDocument,
    @Args('populate') populate: boolean,
  ) {
    if (populate)
      await property
        .populate({ path: 'person', model: Person.name });

    return property.person;
  }
}
