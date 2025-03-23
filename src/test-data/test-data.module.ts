import { Module } from '@nestjs/common';
import { TestDataService } from './test-data.service';
import { TestDataController } from './test-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TestDataNameEntity, TestDataSchema } from './schema/test-data.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: TestDataNameEntity,
        useFactory: () => {
          const schema = TestDataSchema;
          schema.pre('save', function (next) {
            const current = this as any;
            Object.keys(current.toObject()).forEach((key) => {
              const field = current[key];

              if (
                field &&
                field.value !== undefined &&
                field.history !== undefined
              ) {
                if (!field.history) {
                  field.history = [];
                }

                if (current.isModified(`${key}.value`)) {
                  field.history.push({
                    previousValue: field.value,
                    modifiedBy: field.modifiedBy,
                    modifiedAt: new Date(),
                    comments: field.comments || '',
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
                    fieldUpdate.status === existingField.status
                  ) {
                    return;
                  }

                  const historyEntry = {
                    previousValue: existingField.value,
                    modifiedBy: fieldUpdate.modifiedBy || '',
                    modifiedAt: new Date(),
                    comments: fieldUpdate.comments || '',
                    status: fieldUpdate.status || '',
                  };

                  finalUpdate.$set[`${key}.history`] = [
                    ...(existingField.history || []),
                    historyEntry,
                  ];
                  finalUpdate.$set[`${key}.value`] = fieldUpdate.value;
                  finalUpdate.$set[`${key}.comments`] = fieldUpdate.comments;
                  finalUpdate.$set[`${key}.modifiedBy`] =
                    fieldUpdate.modifiedBy;
                  finalUpdate.$set[`${key}.status`] = fieldUpdate.status;
                }
              });
              this.setUpdate(finalUpdate);
            }

            next();
          });

          return schema;
        },
      },
    ]),
  ],
  controllers: [TestDataController],
  providers: [TestDataService],
})
export class TestDataModule {}
