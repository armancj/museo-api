import { Document } from 'mongoose';

export interface DescriptionInstrumentModel extends Document {
  name: string;
  description: string;
  active?: boolean;
}
