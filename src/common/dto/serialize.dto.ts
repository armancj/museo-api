import {
  ApiExtraModels,
  ApiProperty,
  ApiResponse,
  getSchemaPath,
  OmitType,
} from '@nestjs/swagger';
import { applyDecorators, Type } from '@nestjs/common';

export class SerializeDto<TData> {
  @ApiProperty()
  response: string;

  @ApiProperty()
  ok: boolean;

  @ApiProperty()
  data?: TData;
}

export const ApiSerializeResponse = <TModel extends Type<any>>(
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
