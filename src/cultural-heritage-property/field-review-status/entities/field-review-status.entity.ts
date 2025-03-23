import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadata } from '../models/field-review-status.model';

export class FieldReviewStatusEntity<T> implements FieldMetadata<T> {
  @ApiProperty({
    isArray: true,
    type: Object,
  })
  history: Array<{
    modifiedBy: string;
    previousValue: T;
    modifiedAt: Date;
    comment?: string;
    status: 'Pending' | 'To Review' | 'Reviewed' | 'Has Issue';
  }>;

  @ApiProperty({
    enum: ['Pending', 'To Review', 'Reviewed', 'Has Issue'],
  })
  status: 'Pending' | 'To Review' | 'Reviewed' | 'Has Issue';

  @ApiProperty()
  value: T;

  @ApiProperty({
    type: String,
    required: true,
  })
  modifiedBy: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  comment?: string;

  constructor(option: FieldMetadata<T>) {
    this.value = option.value;
    this.modifiedBy = option.modifiedBy;
    this.comment = option.comment || '';
    this.status = option.status || 'To Review';
    this.history = option.history.map((history) => {
      return {
        previousValue: history.previousValue,
        modifiedBy: history.modifiedBy,
        modifiedAt: history.modifiedAt,
        comment: history.comment,
        status: history.status,
      };
    });
  }

  static create(options: FieldMetadata<any>): FieldReviewStatusEntity<any> {
    return new FieldReviewStatusEntity<any>(options);
  }
}
