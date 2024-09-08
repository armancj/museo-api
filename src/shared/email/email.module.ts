import { Module } from '@nestjs/common';
import { EmailNodemailerService } from "./email-nodemailer.service";

@Module({
  imports: [],
  providers: [EmailNodemailerService],
  exports: [],
})
export class EmailModule {}
