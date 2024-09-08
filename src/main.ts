import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "@nestjs/config";
import {Logger, ValidationPipe} from "@nestjs/common";
import {HttpExceptionFilter} from "./common/filters/http-exception.filter";
import {LoggerInterceptor} from "./common/interceptors/logger.interceptor";
import {swaggerDocumentation} from "./config/swagger.config";
import {apiEnv} from "./config/app.const";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const logger = new Logger(`Server running`);
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
  logger.log(await app.getUrl());
}
bootstrap().then(()=> console.log('Executed server'));
