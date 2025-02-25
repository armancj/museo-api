import { HttpStatus } from "@nestjs/common";

export class Unauthorized {
  'statusCode' = 401;
  'message' = 'Unauthorized';
  'timestamp' = '2023-10-14T15:00:53.687Z';
  'path' = '/auth/profile';
  'method' = 'GET';
}
export class Forbidden {
  'statusCode' = 403;
  'message' = 'Forbidden resource';
  'error': 'Forbidden';
  'timestamp' = '2023-10-14T15:00:53.687Z';
  'path' = '/auth/profile';
  'method' = 'GET';
}

export class NotFound {
  'statusCode' = HttpStatus.NOT_FOUND;
  'message' = 'Not found resource';
  'error': 'NotFound ';
  'timestamp' = new Date(Date.now()).toISOString();
  'method' = 'GET';
}
