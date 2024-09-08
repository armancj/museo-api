export interface HelperMockMethods<T> {
  __changeStore(store: T[]): void;
  __reset(): void;
  __setIsError(value: boolean): void;
  __getStore(): T[];
  __isError(): boolean;
}
