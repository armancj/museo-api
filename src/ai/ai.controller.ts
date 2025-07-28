import { Body, Controller, Post, HttpException, HttpStatus, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AiService } from './ai.service';
import { ChatRequestDto } from './dto/chat-request.dto';
import { ChatResponseDto } from './dto/chat-response-dto';
import { IaModelDto } from './dto/ia-model.dto';

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

  /**
   * Lists all available AI models
   *
   * @returns Array of available models
   */
  @Get('models')
  @ApiOperation({ summary: 'List available AI models' })
  @ApiResponse({ status: 200, description: 'Models listed successfully' })
  async listModels() {
    try {
      const models = await this.aiService.listModels();
      return { models };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to list models',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Installs a new AI model
   *
   * @returns Success message
   * @param iaModelDto
   */
  @Post('models/install')
  @ApiOperation({ summary: 'Install a new AI model' })
  @ApiResponse({ status: 200, description: 'Model installed successfully' })
  async installModel(@Body() iaModelDto: IaModelDto) {
    try {
      await this.aiService.installModel(iaModelDto.modelName);
      return { message: `Model ${iaModelDto.modelName} installed successfully` };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to install model',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
