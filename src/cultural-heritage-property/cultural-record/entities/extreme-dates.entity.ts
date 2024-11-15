export class ExtremeDatesEntity {
  start: Date;
  end: Date;

  constructor(option: { start: Date; end: Date }) {
    this.start = new Date(option.start);
    this.end = new Date(option.end);
  }

  static create(option: { start: Date; end: Date }): ExtremeDatesEntity {
    return new ExtremeDatesEntity(option);
  }
}
