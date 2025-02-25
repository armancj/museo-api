import { Module } from '@nestjs/common';
import { HeritageOfficesService } from './heritage-offices.service';
import { HeritageOfficesController } from './heritage-offices.controller';

@Module({
  controllers: [HeritageOfficesController],
  providers: [HeritageOfficesService],
})
export class HeritageOfficesModule {}
