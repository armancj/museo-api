
import { Exclude } from 'class-transformer';

export class Auth {
  readonly uuid: string;
  @Exclude()
  readonly currentHashedRefreshToken: string;

  constructor(options: any) {
    this.currentHashedRefreshToken = options.currentHashedRefreshToken;
    this.uuid = options.uuid;
  }
}
