import { Schema } from 'mongoose';
import {
  FieldMetadata,
  HistoryItem,
  StatusObject,
} from '../models/field-review-status.model';
import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';

interface UpdateDto {
  $set: CulturalPropertyModel;
}

function updateFieldWithHistory(
  currentField: FieldMetadata<any>,
  newField: FieldMetadata<any>,
): FieldMetadata<any> {
  const history = currentField.history || [];
  if (
    newField.value !== currentField.value ||
    newField.status !== currentField.status ||
    newField.comment !== currentField.comment
  ) {
    const historyEntry: HistoryItem<any> = {
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
    const update = (this.getUpdate() as UpdateDto)?.$set.accessAndUseConditions;
    if (update) {
      const doc = (await this.model
        .findOne(this.getFilter())
        .lean()
        .exec()) as unknown as CulturalPropertyModel;
      if (doc) {
        doc.accessAndUseConditions =
          doc?.accessAndUseConditions ||
          ({
            accessConditions: {},
            reproductionConditions: {},
            technicalRequirements: {},
          } as any);
        [
          'accessConditions',
          'reproductionConditions',
          'technicalRequirements',
        ].forEach((key) => {
          if (update[key])
            update[key] = updateFieldWithHistory(
              doc.accessAndUseConditions[key],
              update[key],
            );
        });
        this.setUpdate({ $set: { accessAndUseConditions: update } });
      }
    }
    next();
  });
  return schema;
}
