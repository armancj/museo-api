import { Inject, Injectable, Logger } from '@nestjs/common';
import { HttpAdapter } from './http/http-adapter.interface';

import { HTTP_ADAPTER_TOKEN } from './tokens';

/**
 * Interface for the request payload sent to Ollama API
 */
interface OllamaGenerateRequest {
  model: string;
  prompt: string;
  stream?: boolean;
}

/**
 * Interface for the response from Ollama API
 */
interface OllamaGenerateResponse {
  model: string;
  response: string;
  done: boolean;
}

/**
 * Interface for listing models
 */
interface OllamaModelsResponse {
  models: Array<{
    name: string;
    size: number;
    digest: string;
    modified_at: string;
  }>;
}

/**
 * Service for interacting with the Ollama API to generate AI responses.
 * This service uses a decoupled HTTP adapter to make requests to the Ollama API.
 */
@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);
  private readonly ollamaBaseUrl = 'http://localhost:11434';
  private readonly modelName = 'tinyllama';

  constructor(@Inject(HTTP_ADAPTER_TOKEN) private readonly httpAdapter: HttpAdapter) {}

  /**
   * Lists all available models in Ollama
   * @returns Array of available models
   */
  async listModels(): Promise<any> {
    try {
      this.logger.log('Listing available models...');

      const response = await this.httpAdapter.get<OllamaModelsResponse>(
        `${this.ollamaBaseUrl}/api/tags`,
      );

      this.logger.log(`Found ${response.models?.length || 0} models`);
      return response.models || [];
    } catch (error) {
      this.logger.error(`Error listing models: ${error.message}`);
      throw new Error(`Failed to list models: ${error.message}`);
    }
  }

  /**
   * Generates a response from the AI model based on the provided prompt.
   *
   * @param prompt - The user's input prompt
   * @returns The AI-generated response
   */
  async generateResponse(prompt: string): Promise<string> {
    try {
      this.logger.log(`Generating response for prompt: ${prompt.substring(0, 50)}...`);

      const models = await this.listModels();
      if (!models || models.length === 0) {
        throw new Error('No models available. Please install a model first.');
      }

      const modelToUse = models.find((m: { name: string | string[] }) =>
        m.name.includes(this.modelName),
      )
        ? this.modelName
        : models[0].name;

      this.logger.log(`Using model: ${modelToUse}`);

      const requestData: OllamaGenerateRequest = {
        model: modelToUse,
        prompt,
        stream: false,
      };

      const response = await this.httpAdapter.post<OllamaGenerateRequest, OllamaGenerateResponse>(
        `${this.ollamaBaseUrl}/api/generate`,
        requestData,
      );

      this.logger.log('Response generated successfully');
      return response.response;
    } catch (error) {
      this.logger.error(`Error generating response: ${error.message}`);

      if (error.message.includes('404')) {
        throw new Error(
          'Ollama API endpoint not found. Please ensure Ollama is properly installed and the model exists.',
        );
      } else if (error.message.includes('ECONNREFUSED')) {
        throw new Error(
          'Cannot connect to Ollama. Please ensure Ollama is running on localhost:11434.',
        );
      }

      throw new Error(`Failed to generate AI response: ${error.message}`);
    }
  }

  /**
   * Installs a model if it doesn't exist
   * @param modelName - Name of the model to install
   */
  async installModel(modelName: string): Promise<void> {
    try {
      this.logger.log(`Installing model: ${modelName}`);

      await this.httpAdapter.post(`${this.ollamaBaseUrl}/api/pull`, { name: modelName });

      this.logger.log(`Model ${modelName} installed successfully`);
    } catch (error) {
      this.logger.error(`Error installing model: ${error.message}`);
      throw new Error(`Failed to install model: ${error.message}`);
    }
  }
}
