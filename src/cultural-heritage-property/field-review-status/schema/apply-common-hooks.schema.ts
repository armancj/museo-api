import { Schema } from 'mongoose';
import {
  FieldMetadata,
  HistoryItem,
  StatusObject,
} from '../models/field-review-status.model';
import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';

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

function updateFieldWithHistory<T>(
  currentField: FieldMetadata<T>,
  newField: FieldMetadata<T>,
): FieldMetadata<T> {
  const history = currentField.history || [];
  if (
    newField.value !== currentField.value ||
    newField.status !== currentField.status ||
    newField.comment !== currentField.comment
  ) {
    const historyEntry: HistoryItem<T> = {
      previousValue: newField.value,
      modifiedBy: newField.modifiedBy || '',
      modifiedAt: new Date(),
      comment: newField.comment || '',
      status: newField.status as StatusObject,
    };
    history.push(historyEntry);
  }

  return {
    ...newField,
    history,
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
        .exec()) as unknown as CulturalPropertyModel;

      console.log('Existing Document:', {
        existingDoc,
        accessAndUseConditions: existingDoc.accessAndUseConditions,
      });

      if (!existingDoc) {
        console.log('No document found for the given filter.');
        next();
        return;
      }

      if (accessAndUseConditions.accessConditions) {
        accessAndUseConditions.accessConditions = updateFieldWithHistory(
          existingDoc.accessAndUseConditions.accessConditions,
          accessAndUseConditions.accessConditions,
        );
      }

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
