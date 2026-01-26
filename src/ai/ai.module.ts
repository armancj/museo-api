import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';

import { AxiosHttpAdapter } from './http/axios-http-adapter';
import { HTTP_ADAPTER_TOKEN } from './tokens';

/**
 * Module for AI functionality.
 * This module integrates with a Cloud AI service (Hugging Face) and provides
 * endpoints for interacting with it.
 */
@Module({
  imports: [HttpModule],
  controllers: [AiController],
  providers: [
    AiService,
    {
      provide: HTTP_ADAPTER_TOKEN,
      useClass: AxiosHttpAdapter,
    },
  ],
  exports: [AiService],
})
export class AiModule {}
