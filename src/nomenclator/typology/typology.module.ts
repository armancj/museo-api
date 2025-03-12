import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypologyService } from './typology.service';
import { TypologyController } from './typology.controller';
import { Typology, TypologySchema } from './schemas/typology.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Typology.name, schema: TypologySchema }
    ])
  ],
  controllers: [TypologyController],
  providers: [TypologyService],
  exports: [TypologyService]
})
export class TypologyModule {}
