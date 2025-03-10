import { Document } from 'mongoose';

export interface DescriptionInstrument extends Document {
  name: string;
  description: string;
  active?: boolean;
}
