import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { HandledErrorModule } from './handled-error/handled-error.module';
import { EventEmitter2Adapter } from "./event-emitter/event-emitter.adapter";


@Module({
  imports: [EmailModule, HandledErrorModule],
  providers: [EventEmitter2Adapter],
  exports: [EventEmitter2Adapter],
})
export class SharedModule {}
