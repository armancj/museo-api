import { IsNotEmpty, Matches } from 'class-validator';

export class PhoneNumberDto {
  @IsNotEmpty()
  @Matches(/^\(\+\d{2}\) \d{2}-\d{2}-\d{2}-\d{2}$/, {
    message: 'The number is this format (+CC) XX-XX-XX-XX',
  })
  phoneNumber: string;
}
