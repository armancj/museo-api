/**
 * Estructura genérica para un campo con metadatos de revisión.
 * @template T - Tipo de valor del campo.
 */
export interface FieldMetadata<T> {
  /** Valor actual del campo */
  value: T;

  /** Estado de revisión del campo */
  status: 'Pending' | 'To Review' | 'Reviewed' | 'Has Issue';

  /** Comentarios realizados durante el proceso de revisión */
  comment?: string;

  modifiedBy: string;

  /** Historial de cambios realizados en el campo */
  history: Array<{
    /** Quién realizó el cambio */
    modifiedBy: string;

    /** Valor anterior del campo */
    previousValue: T;

    /** Fecha y hora cuando se modificó */
    modifiedAt: Date;

    /** Comentario asociado al cambio */
    comment?: string;

    status: 'Pending' | 'To Review' | 'Reviewed' | 'Has Issue';
  }>;
}
