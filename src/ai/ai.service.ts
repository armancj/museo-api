import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InferenceClient } from '@huggingface/inference';
import { formattedPrompt } from './util/specialized-prompt.function';

/**
 * Service for interacting with the Hugging Face Inference API to generate AI responses.
 */
@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);
  private readonly client: InferenceClient;
  private readonly modelName = 'HuggingFaceH4/zephyr-7b-beta:featherless-ai';

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('HF_API_KEY');

    if (!apiKey) {
      this.logger.warn(
        'HF_API_KEY not found in environment variables. Requests may be rate-limited or fail.',
      );
    }

    this.client = new InferenceClient(apiKey);
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

      const specializedPrompt = formattedPrompt(prompt);

      console.log({ specializedPrompt });

      const response = await this.client.chatCompletion({
        model: this.modelName,
        messages: [
          {
            role: 'system',
            content:
              'Eres un experto en patrimonio cultural cubano. Responde de forma clara, histórica y educativa.',
          },
          {
            role: 'user',
            content: specializedPrompt,
          },
        ],
        max_tokens: 400,
        temperature: 0.35,
        top_p: 0.9,
      });

      this.logger.log('Response generated successfully');

      const generatedText = response.choices[0]?.message?.content || '';

      return this.cleanResponse(generatedText);
    } catch (error) {
      this.logger.error(`Error generating response: ${error.message}`);
      throw new Error(`Failed to generate AI response: ${error.message}`);
    }
  }

  private cleanResponse(rawResponse: string): string {
    const CONVERSATION_TERMINATORS = [
      '\\n\\nUsuario:',
      '\\n\\nPedido:',
      '\\n\\nAsistent:',
      '\\n\\nPregunta:',
      '[INST]',
      '[/INST]',
    ];

    const cleaned = rawResponse;

    const PREFIX_PATTERNS = /^(Respuesta|Asistente|Responde|Usuario):\\s*/i;
    const MAX_SENTENCES = 5;

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
