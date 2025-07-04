import { RootFilterQuery } from 'mongoose';

export class QueryBuilder<T> {
  private filter: Record<string, any> = {};

  constructor(excludeDeleted: boolean = true) {
    if (excludeDeleted) {
      this.filter.deleted = false;
    }
  }

  where(path: string, value: any): this {
    this.filter[path] = value;
    return this;
  }

  whereIn(path: string, values: any[]): this {
    this.filter[path] = { $in: values };
    return this;
  }

  whereExists(path: string): this {
    this.filter[path] = { $exists: true };
    return this;
  }

  when(condition: boolean, fn: (builder: this) => this): this {
    return condition ? fn(this) : this;
  }

  build(): RootFilterQuery<T> {
    return this.filter as RootFilterQuery<T>;
  }
}
