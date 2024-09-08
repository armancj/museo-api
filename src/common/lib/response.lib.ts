export class SerializerResponse<T extends Record<string, unknown>> {
  constructor(
    readonly response: string,
    readonly data?: T,
    readonly ok = true,
  ) {}
}
