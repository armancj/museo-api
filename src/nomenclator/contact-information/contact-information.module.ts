import { Module } from '@nestjs/common';
import { PhoneNumbersModule } from './phone-numbers/phone-numbers.module';
import { EmailsModule } from './emails/emails.module';
import { SocialMediaModule } from './social-media/social-media.module';

@Module({
  imports: [PhoneNumbersModule, EmailsModule, SocialMediaModule]
})
export class ContactInformationModule {}
