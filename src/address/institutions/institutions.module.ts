import { Module } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { InstitutionsController } from './institutions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  InstitutionNameEntity,
  InstitutionSchema,
} from './schema/institution.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: InstitutionNameEntity, schema: InstitutionSchema },
    ]),
  ],
  controllers: [InstitutionsController],
  providers: [InstitutionsService],
  exports: [InstitutionsService]
})
export class InstitutionsModule { }
