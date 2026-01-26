import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';

/**
 * Module for AI functionality.
 * This module integrates with Hugging Face Inference API and provides
 * endpoints for interacting with it.
 */
@Module({
  controllers: [AiController],
  providers: [AiService],
  exports: [AiService],
})
export class AiModule { }
