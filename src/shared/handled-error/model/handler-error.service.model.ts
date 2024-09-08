export interface HandlerErrorServiceModel {
  handlerErrorDb(error: unknown, message?: string): never;
}
