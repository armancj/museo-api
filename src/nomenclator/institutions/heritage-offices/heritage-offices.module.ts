import { Module } from '@nestjs/common';
import { HeritageOfficesController } from './heritage-offices.controller';
import { HeritageOfficesService } from './heritage-offices.service';

@Module({
  controllers: [HeritageOfficesController],
  providers: [HeritageOfficesService]
})
export class HeritageOfficesModule {}
