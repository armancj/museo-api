import { IsOptional, IsString } from 'class-validator';

export class IaModelDto {
  @IsOptional()
  @IsString()
  modelName: string = 'tinyllama';
}
