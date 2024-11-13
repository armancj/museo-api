import { Schema as MongooseSchema } from 'mongoose';

export const ExtremeDatesSchema = new MongooseSchema({
  start: { type: Date, required: true },
  end: { type: Date, required: true }
});