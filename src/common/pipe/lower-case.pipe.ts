import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class LowerCasePipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata): string {
    if (typeof value !== 'string') { throw new BadRequestException('Validation failed');}
    return value.toUpperCase();
  }
}
