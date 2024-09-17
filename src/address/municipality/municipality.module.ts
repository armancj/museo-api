import { Module } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { MunicipalityController } from './municipality.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { MunicipalitiesNameEntity, MunicipalitiesSchema } from "./schema/municipalities.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MunicipalitiesNameEntity, schema: MunicipalitiesSchema },
    ]),
  ],
  controllers: [MunicipalityController],
  providers: [MunicipalityService],
})
export class MunicipalityModule {}
