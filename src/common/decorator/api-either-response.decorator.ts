import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import 'reflect-metadata';

export function ApiEitherResponse<L, R>(
  leftStatus: number,
  leftDescription: string,
  rightStatus: number,
  rightDescription: string,
) {
  const leftType: L = Reflect.getMetadata(
    'design:returntype',
    this.prototype,
    'getLeft',
  );
  const rightType: R = Reflect.getMetadata(
    'design:returntype',
    this.prototype,
    'getRight',
  );

  return applyDecorators(
    ApiResponse({
      status: leftStatus,
      description: leftDescription,
      isArray: Array.isArray(leftType),
    }),
    ApiResponse({
      status: rightStatus,
      description: rightDescription,
      isArray: Array.isArray(rightType),
    }),
  );
}
