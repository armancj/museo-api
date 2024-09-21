import { Module } from '@nestjs/common';
import { ProvinceModule } from './province/province.module';
import { CountryModule } from './country/country.module';
import { MunicipalityModule } from './municipality/municipality.module';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [ProvinceModule, CountryModule, MunicipalityModule, SharedModule],
})
export class AddressModule {}
