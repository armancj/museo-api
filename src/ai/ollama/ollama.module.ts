import { Module } from '@nestjs/common';
import { OllamaService } from './ollama.service';

/**
 * Module for managing the Ollama process.
 * This module provides the OllamaService which is responsible for
 * starting and stopping the Ollama process.
 */
@Module({
  providers: [OllamaService],
  exports: [OllamaService],
})
export class OllamaModule {}
