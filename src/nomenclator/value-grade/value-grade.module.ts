import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ValueGradeService } from './value-grade.service';
import { ValueGradeController } from './value-grade.controller';
import { ValueGradeEntity, ValueGradeSchema } from './schema/value-grade.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ValueGradeEntity.name,
        schema: ValueGradeSchema,
      },
    ]),
  ],
  controllers: [ValueGradeController],
  providers: [ValueGradeService],
  exports: [ValueGradeService],
})
export class ValueGradeModule {}