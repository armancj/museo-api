import { JwtPayload } from '../strategies/jwt.payload';

export class LoginResponseDto extends JwtPayload {
  access_token: string;
  refresh_token: string;
}
