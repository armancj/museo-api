import { Module } from '@nestjs/common';
import { EmailNodemailerService } from './email-nodemailer.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [EventEmitterModule],
  providers: [EmailNodemailerService],
  exports: [],
})
export class EmailModule {}
