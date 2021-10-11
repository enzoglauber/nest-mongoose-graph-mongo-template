import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { CreatePropertyInput, ListPropertyInput, UpdatePropertyInput } from './property.inputs';
import { Property, PropertyDocument } from './property.model';


@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<PropertyDocument>,
  ) {}

  create(payload: CreatePropertyInput) {
    const createdProperty = new this.propertyModel(payload);
    return createdProperty.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.propertyModel.findById(_id).exec();
  }

  list(filters: ListPropertyInput) {
    return this.propertyModel.find({ ...filters }).exec();
  }

  update(payload: UpdatePropertyInput) {
    return this.propertyModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.propertyModel.findByIdAndDelete(_id).exec();
  }
}
