import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenericClassificationService } from './generic-classification.service';
import { GenericClassificationController } from './generic-classification.controller';
import { GenericClassificationEntity, GenericClassificationSchema } from './schema/generic-classification.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: GenericClassificationEntity.name,
        schema: GenericClassificationSchema,
      },
    ]),
  ],
  controllers: [GenericClassificationController],
  providers: [GenericClassificationService],
  exports: [GenericClassificationService],
})
export class GenericClassificationModule {}