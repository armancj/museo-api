import { Module } from '@nestjs/common';
import { ReportsModule } from './reports/reports.module';
import { TypologyModule } from './typology/typology.module';
import { AccessConditionsModule } from './access-conditions/access-conditions.module';
import { ReproductionConditionsModule } from './reproduction-conditions/reproduction-conditions.module';
import { DescriptionInstrumentsModule } from './description-instruments/description-instruments.module';
import { ConservationStatusModule } from './conservation-status/conservation-status.module';
import { GenericClassificationModule } from './generic-classification/generic-classification.module';
import { FundTitleModule } from './fund-title/fund-title.module';
import { ValueGradeModule } from './value-grade/value-grade.module';
import { SectionModule } from './section/section.module';
import { HeritageTypeModule } from './heritage-type/heritage-type.module';
import { EntryFormModule } from './entry-form/entry-form.module';

@Module({
  imports: [
    TypologyModule,
    ReportsModule,
    AccessConditionsModule,
    ReproductionConditionsModule,
    DescriptionInstrumentsModule,
    ConservationStatusModule,
    GenericClassificationModule,
    FundTitleModule,
    ValueGradeModule,
    SectionModule,
    HeritageTypeModule,
    EntryFormModule,
  ],
  exports: [
    TypologyModule,
    AccessConditionsModule,
    ReproductionConditionsModule,
    ConservationStatusModule,
    GenericClassificationModule,
    FundTitleModule,
    ValueGradeModule,
    SectionModule,
    HeritageTypeModule,
    EntryFormModule,
  ],
})
export class NomenclatureModule {}
