import { Schema } from 'mongoose';
import {
  FieldMetadata,
  HistoryItem,
  StatusObject,
} from '../models/field-review-status.model';
import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';

interface UpdateDto {
  $set: Partial<CulturalPropertyModel>;
}

function updateFieldWithHistory(
  currentField: FieldMetadata<any> = {
    value: null,
    history: [],
    status: { status: 'Pending' },
    modifiedBy: '',
    comment: '',
  },

  newField: FieldMetadata<any>,
): FieldMetadata<any> {
  console.log('\n>>> updateFieldWithHistory: Inicio de la función');
  console.log('>>> currentField recibido:', currentField);
  console.log('>>> newField recibido:', newField);

  const history = currentField.history || [];
  console.log('>>> Historial actual del campo (antes de actualizar):', history);

  const historyEntry: HistoryItem<any> = {
    previousValue: newField.value,
    modifiedBy: newField.modifiedBy || '',
    modifiedAt: new Date(),
    comment: newField.comment || '',
    status: newField.status as StatusObject,
  };

  console.log('>>> Nueva entrada añadida al historial:', historyEntry);

  history.push(historyEntry);

  const updatedField = {
    ...newField,
    history, // Aseguramos que el historial acumulado esté presente en el nuevo campo
  };

  console.log('>>> Campo actualizado con historial:', updatedField); // Log 12
  console.log('\n>>> updateFieldWithHistory: Fin de la función\n');

  return updatedField;
}

export function applyCommonHooksSchema(schema: Schema): Schema {
  schema.pre('findOneAndUpdate', async function (next) {
    const update = (this.getUpdate() as UpdateDto)?.$set;
    if (!update) return next();
    console.log('>>> Update recibido:', update);

    const doc = await this.model.findOne(this.getFilter()).lean().exec();
    if (!doc) return next();
    console.log('>>> Documento encontrado en la base de datos:', doc);

    for (const key of Object.keys(doc)) {
      if (update[key] && typeof doc[key] === 'object') {
        const currentEmbedded = doc[key];
        const updatedEmbedded = update[key];
        console.log(`>>> Campo actual: ${key}`, {
          currentEmbedded,
          updatedEmbedded,
        });

        Object.keys(currentEmbedded).forEach((fieldKey) => {
          console.log(`\n>>> Procesando campo embebido: ${fieldKey}`);
          console.log('>>> Valor actual del campo:', currentEmbedded[fieldKey]); // Log 4
          console.log('>>> Nuevo valor del campo:', updatedEmbedded[fieldKey]);

          if (updatedEmbedded[fieldKey]) {
            updatedEmbedded[fieldKey] = updateFieldWithHistory(
              currentEmbedded[fieldKey],
              updatedEmbedded[fieldKey],
            );
            console.log(
              '>>> Resultado de updateFieldWithHistory:',
              updatedEmbedded[fieldKey],
            );
          }
        });

        this.setUpdate({
          $set: {
            ...update,
            [key]: updatedEmbedded,
          },
        });
        console.log(
          '>>> Objeto setUpdate después de manipulación:',
          this.getUpdate(),
        );
      }
    }

    next();
  });

  return schema;
}
