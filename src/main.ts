import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggerInterceptor } from './common/interceptors/logger.interceptor';
import { swaggerDocumentation } from './config/swagger.config';
import { apiEnv } from './config/app.const';
import { CommandFactory } from 'nest-commander';
import { InstitutionsModule } from './address/institutions/institutions.module';
import { BaseSchema } from './common/schema/base.schema';

declare const module: any;
async function bootstrap() {
  const isCommandExecution = process.argv.length > 2;
  if (isCommandExecution) {
    await CommandFactory.run(AppModule, { logger: ['log', 'error', 'debug'] });
    console.log('Command execution detected, running command...');
    return;
  }

  const logger = new Logger(`Server running`);
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  app.useGlobalInterceptors(new LoggerInterceptor());

  await swaggerDocumentation(app);
  app.enableCors();

  await app.listen(Number(config.get<number>(apiEnv.app.port) || 3000));

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  logger.log(await app.getUrl());
}
bootstrap().then(() => console.log('Executed server'));
