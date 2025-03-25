/**
 * Estructura genérica para un campo con metadatos de revisión.
 * @template T - Tipo de valor del campo.
 */

export type StatusObject = {
  status: 'Pending' | 'To Review' | 'Reviewed' | 'Has Issue';
};

export interface FieldMetadata<T> {
  /** Valor actual del campo */
  value: T;

  /** Estado de revisión del campo */
  status: StatusObject;

  /** Comentarios realizados durante el proceso de revisión */
  comment?: string;

  modifiedBy: string;

  /** Historial de cambios realizados en el campo */
  history: Array<HistoryItem<T>>;
}

export type HistoryItem<T> = {
  modifiedBy: string;

  previousValue: T;

  modifiedAt: Date;

  comment?: string;

  status: StatusObject;
};
