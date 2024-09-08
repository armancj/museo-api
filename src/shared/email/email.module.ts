import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from "@nestjs-modules/mailer";
import { EmailNodemailerService } from "./email-nodemailer.service";

@Module({
  imports: [
    MailerModule.forRoot({ }),JwtModule],
  providers: [EmailNodemailerService],
  exports: [],
})
export class EmailModule {}
