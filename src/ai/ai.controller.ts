import { Body, Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AiService } from './ai.service';
import { ChatRequestDto } from './dto/chat-request.dto';
import { ChatResponseDto } from './dto/chat-response-dto';

/**
 * Controller for AI-related endpoints
 */
@ApiTags('AI')
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  /**
   * Generates an AI response based on the provided prompt
   */
  @Post('chat')
  @ApiOperation({
    summary: 'Generate AI response',
    description: 'Sends a prompt to the AI model and returns the generated response',
  })
  @ApiResponse({
    status: 200,
    description: 'AI response generated successfully',
    type: ChatResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid request' })
  @ApiResponse({ status: 500, description: 'Internal server error or AI service unavailable' })
  async generateResponse(@Body() chatRequest: ChatRequestDto): Promise<ChatResponseDto> {
    try {
      const response = await this.aiService.generateResponse(chatRequest.prompt);
      return { response };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to generate AI response',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
