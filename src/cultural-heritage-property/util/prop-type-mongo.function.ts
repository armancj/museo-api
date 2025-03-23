import { PropOptions } from '@nestjs/mongoose/dist/decorators/prop.decorator';

interface PropTypeMongoModel {
  type: any;
  enum?:
    | Array<string | number | null>
    | ReadonlyArray<string | number | null>
    | {
        values:
          | Array<string | number | null>
          | ReadonlyArray<string | number | null>;
        message?: string;
      }
    | { [path: string]: string | number | null };
  required?: boolean;
  defaultStatus?: string;
  defaultHistory?: any[];
}

/**
 * Helper to create reusable Prop definitions for Mongoose.
 * @param type - The type of the value (e.g., String, Date, etc.)
 * @param enum - Optional: Array of possible enum values
 * @param required - Optional: Whether the field is required
 * @param defaultStatus - Optional: Default status value (e.g., 'Pending')
 * @param defaultHistory - Optional: Default history (empty by default)
 */
export function propTypeMongo({
  type,
  enum: enumProp,
  required = true,
  defaultStatus = 'Pending',
  defaultHistory = [],
}: PropTypeMongoModel): PropOptions {
  return {
    type: {
      value: {
        type,
        ...(enumProp ? { enum: enumProp } : {}),
      },
      status: { type: String, default: defaultStatus },
      modifiedBy: { type: String },
      history: {
        type: [
          {
            previousValue: { type, required: false },
            modifiedAt: { type: Date },
            comment: { type: String },
            modifiedBy: { type: String },
            status: { type: String, default: defaultStatus },
          },
        ],
        default: defaultHistory,
      },
    },
    ...(required ? { required } : {}),
  };
}
