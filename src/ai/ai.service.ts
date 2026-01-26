import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapter } from './http/http-adapter.interface';
import { HTTP_ADAPTER_TOKEN } from './tokens';
import { formattedPrompt } from './util/specialized-prompt.function';

/**
 * Interface for the request payload sent to Hugging Face Inference API
 */
interface HuggingFaceGenerateRequest {
  inputs: string;
  parameters?: {
    max_new_tokens?: number;
    temperature?: number;
    top_p?: number;
    top_k?: number;
    repetition_penalty?: number;
    return_full_text?: boolean;
  };
}

/**
 * Interface for the response from Hugging Face API
 */
interface HuggingFaceGenerateResponse {
  generated_text: string;
}

/**
 * Service for interacting with the Hugging Face Inference API to generate AI responses.
 */
@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);
  // Using a powerful free model available on Hugging Face
  private readonly hfModelUrl =
    'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2';
  private readonly apiKey: string | undefined;

  constructor(
    @Inject(HTTP_ADAPTER_TOKEN) private readonly httpAdapter: HttpAdapter,
    private readonly configService: ConfigService,
  ) {
    this.apiKey = this.configService.get<string>('HF_API_KEY');
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

      if (!this.apiKey) {
        this.logger.warn(
          'HF_API_KEY not found in environment variables. Requests may be rate-limited or fail if the model requires authentication.',
        );
      }

      const specializedPrompt = formattedPrompt(prompt);

      // Mistral format for instructions
      const formattedInput = `<s>[INST] ${specializedPrompt} [/INST]`;

      const requestData: HuggingFaceGenerateRequest = {
        inputs: formattedInput,
        parameters: {
          max_new_tokens: 250,
          temperature: 0.3,
          top_p: 0.7,
          top_k: 20,
          repetition_penalty: 1.2,
          return_full_text: false,
        },
      };

      const headers: Record<string, string> = {};
      if (this.apiKey) {
        headers['Authorization'] = `Bearer ${this.apiKey}`;
      }

      const response = await this.httpAdapter.post<
        HuggingFaceGenerateRequest,
        HuggingFaceGenerateResponse[] | HuggingFaceGenerateResponse
      >(this.hfModelUrl, requestData, { headers });

      this.logger.log('Response generated successfully');

      let generatedText = '';
      if (Array.isArray(response)) {
        generatedText = response[0]?.generated_text || '';
      } else {
        generatedText = (response as HuggingFaceGenerateResponse).generated_text;
      }

      return this.cleanResponse(generatedText);
    } catch (error) {
      this.logger.error(`Error generating response: ${error.message}`);
      throw new Error(`Failed to generate AI response: ${error.message}`);
    }
  }

  private cleanResponse(rawResponse: string): string {
    // Reuse the cleaning logic but adapted if necessary.
    // Mistral output is usually clean if prompt is good, but we keep the safety mechanics.
    const CONVERSATION_TERMINATORS = [
      '\n\nUsuario:',
      '\n\nPedido:',
      '\n\nAsistent:',
      '\n\nPregunta:',
      '[INST]',
      '[/INST]',
    ];

    // Remove the input prompt if it was returned (return_full_text: false should handle this, but double check)
    const cleaned = rawResponse;

    const PREFIX_PATTERNS = /^(Respuesta|Asistente|Responde|Usuario):\s*/i;
    const MAX_SENTENCES = 5; // Increased slightly

    return (
      cleaned
        .trim()
        .split(
          new RegExp(
            CONVERSATION_TERMINATORS.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join(
              '|',
            ),
          ),
        )[0]
        .replace(PREFIX_PATTERNS, '')
        .split('. ')
        .slice(0, MAX_SENTENCES)
        .join('. ')
        .replace(/\.+$/, '') + (cleaned.includes('.') ? '.' : '')
    );
  }
}
