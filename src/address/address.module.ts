import { Module } from '@nestjs/common';
import { ProvinceModule } from "./province/province.module";
import { CountryModule } from "./country/country.module";
import { MunicipalityModule } from "./municipality/municipality.module";

@Module({
  imports: [
    ProvinceModule,
    CountryModule,
    MunicipalityModule,
  ]
})
export class AddressModule {}
