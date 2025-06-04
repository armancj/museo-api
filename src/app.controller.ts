import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

/**
 * Root controller for the Museo API application.
 *
 * This controller handles basic application-level endpoints such as
 * the root endpoint that returns a welcome message.
 */
@ApiTags('App')
@Controller()
export class AppController {
  /**
   * Returns a welcome message for the Museo API.
   *
   * This endpoint serves as a simple health check and entry point
   * to verify that the API is running correctly.
   *
   * @returns {string} A welcome message string
   */
  @Get()
  @ApiOperation({
    summary: 'Get welcome message',
    description: 'Returns a welcome message to verify the API is running',
  })
  @ApiResponse({
    status: 200,
    description: 'Welcome message returned successfully',
    type: String,
  })
  getHello(): string {
    return 'hola este es el api de museo';
  }
}
