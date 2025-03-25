import { Schema } from 'mongoose';
import { FieldMetadata } from '../models/field-review-status.model';

interface AccessAndUseConditions {
  accessConditions: FieldMetadata<string[]>;
  reproductionConditions: FieldMetadata<string[]>;
  technicalRequirements: FieldMetadata<string>;
}

interface UpdateDto {
  $set: {
    accessAndUseConditions: AccessAndUseConditions;
  };
}

export function applyCommonHooksSchema(schema: Schema): Schema {
  schema.pre('findOneAndUpdate', async function (next) {
    console.log('=== Entering findOneAndUpdate Hook ===');
    const filter = this.getFilter();
    const update: UpdateDto = this.getUpdate() as UpdateDto;
    const model = this.model;

    console.log('Filter:', filter);
    console.log('Update', update);

    const accessAndUseConditions = update.$set.accessAndUseConditions;

    if (accessAndUseConditions) {
      const existingDoc = (await model
        .findOne(filter)
        .lean()
        .exec()) as unknown as AccessAndUseConditions;

      if (!existingDoc) {
        console.log('No document found for the given filter.');
        next();
        return;
      }

      console.log('Existing Document:', existingDoc);

      // Sobrescribir los datos procesados en el $set de la actualización
      this.setUpdate({
        $set: {
          accessAndUseConditions,
        },
      });
    } else {
      console.log('AccessAndUseConditions is not defined.');
    }

    console.log('=== Exiting findOneAndUpdate Hook ===\n');
    next();
  });

  return schema;
}
