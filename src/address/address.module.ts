import { Module } from '@nestjs/common';
import { ProvinceModule } from './province/province.module';
import { CountryModule } from './country/country.module';
import { MunicipalityModule } from './municipality/municipality.module';
import { SharedModule } from '../shared/shared.module';
import { InstitutionsModule } from './institutions/institutions.module';

@Module({
  imports: [
    ProvinceModule,
    CountryModule,
    MunicipalityModule,
    SharedModule,
    InstitutionsModule,
  ],
})
export class AddressModule {}
