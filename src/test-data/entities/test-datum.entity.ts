import { TestDataModel } from '../model/test-data.model';

export class TestDatum {
  test: string;

  constructor(options: Partial<TestDataModel> = {}) {
    this.test = options.name;
  }
}
