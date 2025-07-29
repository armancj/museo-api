import { IsString } from 'class-validator';

/**
 * DTO for the chat response
 */
export class ChatResponseDto {
  /**
   * The AI-generated response
   * @example "Museums have a rich history dating back to ancient times..."
   */
  @IsString()
  response: string;
}
