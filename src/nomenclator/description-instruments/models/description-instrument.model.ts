import { Document } from 'mongoose';

export interface DescriptionInstrument extends Document {
  readonly name: string;
  readonly description?: string;
  readonly active?: boolean;
}
