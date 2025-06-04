import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CapitalizePipe implements PipeTransform {
  transform(value: unknown): string {
    if (typeof value === 'string') return value.toUpperCase();
    throw new Error('Value provided is not a string');
  }
}
