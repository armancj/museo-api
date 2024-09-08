import { IsJWT, IsNotEmpty, IsString } from 'class-validator';

export class RefreshAuthTokenDto {
  @IsJWT()
  @IsString()
  @IsNotEmpty()
  refreshAuthToken: string;
}
