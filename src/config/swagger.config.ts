import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Request, Response } from 'express';

export const swaggerDocumentation = async (app: INestApplication<any>) => {
  const config = new DocumentBuilder()
    .setTitle('Api Museum')
    .setDescription(
      'The job website API description. [Click here to download the Swagger JSON file](/swagger-json)',
    )
    .addBearerAuth()
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.getHttpAdapter().get('/swagger-json', (req: Request, res: Response) => {
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=app-museum-swagger.json',
    );
    res.setHeader('Content-Type', 'application/json');
    res.send(document);
  });
};
