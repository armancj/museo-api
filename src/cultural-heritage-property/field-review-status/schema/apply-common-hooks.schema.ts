import { Schema } from 'mongoose';

export function applyCommonHooksSchema(schema: Schema): Schema {
  schema.pre('save', function (next) {
    const current = this as any;
    Object.keys(current.toObject()).forEach((key) => {
      const field = current[key];

      if (field && field.value !== undefined && field.history !== undefined) {
        if (!field.history) {
          field.history = [];
        }

        if (current.isModified(`${key}.value`)) {
          field.history.push({
            previousValue: field.value,
            modifiedBy: field.modifiedBy,
            modifiedAt: new Date(),
            comment: field.comment || '',
          });
        }
      }
    });

    next();
  });

  schema.pre('updateOne', async function (next) {
    const filter = this.getFilter();
    const update = this.getUpdate();
    const model = this.model;

    console.log('here');
    const document = await model.findOne(filter);

    if (document) {
      const updatedFields = Object.keys(update);

      const finalUpdate = { $set: {} };
      updatedFields.forEach((key) => {
        const fieldUpdate = update[key];
        const existingField = document[key];

        if (
          fieldUpdate &&
          fieldUpdate.value !== undefined &&
          existingField &&
          existingField.history !== undefined
        ) {
          if (
            fieldUpdate.value === existingField.value &&
            fieldUpdate.status === existingField.status &&
            fieldUpdate?.comment === existingField?.comment
          ) {
            return;
          }

          const historyEntry = {
            previousValue: existingField.value,
            modifiedBy: fieldUpdate.modifiedBy || '',
            modifiedAt: new Date(),
            comment: fieldUpdate?.comment || '',
            status: fieldUpdate.status || '',
          };

          finalUpdate.$set[`${key}.history`] = [
            ...(existingField.history || []),
            historyEntry,
          ];
          finalUpdate.$set[`${key}.value`] = fieldUpdate.value;
          finalUpdate.$set[`${key}.comment`] = fieldUpdate.comment;
          finalUpdate.$set[`${key}.modifiedBy`] = fieldUpdate.modifiedBy;
          finalUpdate.$set[`${key}.status`] = fieldUpdate.status;
        }
      });

      this.setUpdate(finalUpdate);
    }

    next();
  });

  return schema;
}
