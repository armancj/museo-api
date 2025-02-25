import { Schema as MongooseSchema } from 'mongoose';

/**
 * Mongoose schema for representing extreme dates.
 *
 * This schema defines a date range with mandatory start and end dates,
 * typically used to document timeframes associated with cultural records.
 */
export const ExtremeDatesSchema = new MongooseSchema({
  /**
   * Start date of the period.
   * This field is required to ensure proper datetime range definition.
   */
  start: { type: Date, required: true },

  /**
   * End date of the period.
   * This field is required and must be validated against the start date logically.
   */
  end: { type: Date, required: true },
});
