import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value === 'string') return value.toUpperCase();
  }
}
