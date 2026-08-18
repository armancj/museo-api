import { Schema } from 'mongoose';
import { FieldMetadata, HistoryItem, StatusObject } from '../models/field-review-status.model';
import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';
import { isEqual } from 'lodash';

interface UpdateDto {
  $set: Partial<CulturalPropertyModel>;
}

function updateFieldWithHistory(
  currentField: FieldMetadata<any>,
  newField: FieldMetadata<any>,
): FieldMetadata<any> {
  const history = Array.isArray(currentField?.history) ? currentField.history : [];

  if (
    !isEqual(currentField.value, newField.value) ||
    currentField.status !== newField.status ||
    currentField?.comment !== newField?.comment
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

function applyEmbeddedChanges(updatedEmbedded: any, currentEmbedded: any) {
  Object.keys(updatedEmbedded).forEach(fieldKey => {
    const currentField = currentEmbedded[fieldKey] || {
      value: null,
      history: [],
      status: { status: 'Pending' },
      modifiedBy: '',
      comment: '',
    };
    const updatedField = updatedEmbedded[fieldKey];

    if (updatedField) {
      updatedEmbedded[fieldKey] = updateFieldWithHistory(currentField, updatedField);
    }
  });
}

export function applyCommonHooksSchema(schema: Schema): Schema {
  schema.pre('findOneAndUpdate', async function (next) {
    const update = (this.getUpdate() as UpdateDto)?.$set as any;
    if (!update) return next();

    const doc = (await this.model.findOne(this.getFilter()).lean().exec()) as any;
    if (!doc) return next();

    for (const key of Object.keys(update)) {
      const currentEmbedded = doc?.[key] || {};
      const updatedEmbedded = update[key];

      if (typeof updatedEmbedded === 'object') {
        applyEmbeddedChanges(updatedEmbedded, currentEmbedded);

        this.setUpdate({
          $set: {
            ...update,
            [key]: updatedEmbedded,
          },
        });
      }
    }

    next();
  });

  return schema;
}
