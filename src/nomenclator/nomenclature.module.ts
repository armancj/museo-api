import { Module } from '@nestjs/common';
import { ReportsModule } from './reports/reports.module';
import { TypologyModule } from './typology/typology.module';
import { AccessConditionsModule } from './access-conditions/access-conditions.module';
import { ReproductionConditionsModule } from './reproduction-conditions/reproduction-conditions.module';
import { DescriptionInstrumentsModule } from './description-instruments/description-instruments.module';
import { ConservationStatusModule } from './conservation-status/conservation-status.module';

@Module({
  imports: [
    TypologyModule,
    ReportsModule,
    AccessConditionsModule,
    ReproductionConditionsModule,
    DescriptionInstrumentsModule,
    ConservationStatusModule,
  ],
  exports: [
    TypologyModule,
    AccessConditionsModule,
    ReproductionConditionsModule,
    ConservationStatusModule,
  ],
})
export class NomenclatureModule {}
