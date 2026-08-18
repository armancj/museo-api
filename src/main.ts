import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { swaggerDocumentation } from './config/swagger.config';
import { apiEnv } from './config/app.const';
import { CommandFactory } from 'nest-commander';

declare const module: any;

/**
 * Bootstrap function that initializes the NestJS application.
 *
 * This function handles two modes of operation:
 * 1. Command execution mode - when arguments are passed to the application
 * 2. Server mode - when the application runs as an API server
 *
 * In server mode, it sets up:
 * - Global validation pipes with whitelist and transformation
 * - Swagger API documentation
 * - CORS protection
 * - Hot module replacement (for development)
 *
 * @returns {Promise<void>} A promise that resolves when the application is bootstrapped
 */
async function bootstrap(): Promise<void> {
  // Check if the application is being run as a command
  const isCommandExecution = process.argv.length > 2;
  if (isCommandExecution) {
    await CommandFactory.run(AppModule, { logger: ['log', 'error', 'debug'] });
    console.log('Command execution detected, running command...');
    return;
  }

  // Initialize the application in server mode
  const logger = new Logger(`Server running`);
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);

  // Set up global validation pipe for all incoming requests
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties that don't have decorators
      forbidNonWhitelisted: true, // Throw errors for non-whitelisted properties
      transform: true, // Transform payloads to DTO instances
      transformOptions: { enableImplicitConversion: true }, // Enable type conversion
    }),
  );

  // Initialize Swagger documentation
  await swaggerDocumentation(app);

  // Restrict CORS to the origins listed in CORS_ORIGINS (comma separated).
  // Left open when unset so existing deployments keep working, but that is
  // not a safe production setting.
  const allowedOrigins = config.get<string>(apiEnv.app.corsOrigins);
  if (allowedOrigins) {
    app.enableCors({
      origin: allowedOrigins.split(',').map((origin) => origin.trim()),
      credentials: true,
    });
  } else {
    logger.warn('CORS_ORIGINS is not set: allowing every origin');
    app.enableCors();
  }

  // Start listening on the configured port
  await app.listen(Number(config.get<number>(apiEnv.app.port) || 3000));

  // Set up hot module replacement for development
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  // Log the application URL
  logger.log(await app.getUrl());
}

// Execute the bootstrap function
bootstrap().then(() => console.log('Executed server'));
