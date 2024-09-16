import {
  ApiExtraModels,
  ApiProperty,
  ApiResponse,
  getSchemaPath,
  OmitType,
} from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';

export class SerializeDto<TData> {
  @ApiProperty()
  response: string;

  @ApiProperty()
  ok: boolean;

  @ApiProperty()
  data?: TData;
}

type ClassType<T> = {
  new (...args: any[]): T;
};
export const ApiSerializeResponse = <TModel extends ClassType<unknown>>(
  model?: TModel,
  status = 200,
) => {
  if (!model)
    return applyDecorators(
      ApiResponse({
        status,
        type: OmitType(SerializeDto, ['data'] as const),
      }),
    );

  return applyDecorators(
    ApiExtraModels(SerializeDto, model),
    ApiResponse({
      status,
      schema: {
        allOf: [
          { $ref: getSchemaPath(SerializeDto) },
          {
            properties: {
              data: { $ref: getSchemaPath(model) },
            },
          },
        ],
      },
    }),
  );
};
