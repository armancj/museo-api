import { IsString } from 'class-validator';

/**
 * DTO for the chat request
 */
export class ChatRequestDto {
  /**
   * The user's input prompt
   * @example "Tell me about the history of museums"
   */
  @IsString()
  prompt: string;
}
