import { Command, CommandRunner } from 'nest-commander';
import { Logger } from '@nestjs/common';
import { CreateEntryFormDto } from '../../nomenclator/entry-form/dto/create-entry-form.dto';
import { EntryForm } from '../../nomenclator/entry-form/enum/entry-form.enum';
import { EntryFormService } from '../../nomenclator/entry-form/entry-form.service';

// Create default entry forms based on the EntryForm enum
const defaultEntryForms: CreateEntryFormDto[] = [
  {
    name: EntryForm.DONATION,
    description: 'Forma de entrada por donación',
  },
  {
    name: EntryForm.PURCHASE,
    description: 'Forma de entrada por compra',
  },
  {
    name: EntryForm.TRANSFER,
    description: 'Forma de entrada por transferencia',
  },
  {
    name: EntryForm.LOAN,
    description: 'Forma de entrada por préstamo',
  },
  {
    name: EntryForm.EXCHANGE,
    description: 'Forma de entrada por intercambio',
  },
  {
    name: EntryForm.DEPOSIT,
    description: 'Forma de entrada por depósito',
  },
  {
    name: EntryForm.LEGACY,
    description: 'Forma de entrada por legado',
  },
  {
    name: EntryForm.FIELD_COLLECTION,
    description: 'Forma de entrada por recolección de campo',
  },
  {
    name: EntryForm.EXCAVATION,
    description: 'Forma de entrada por excavación',
  },
  {
    name: EntryForm.UNKNOWN,
    description: 'Forma de entrada desconocida',
  },
  {
    name: EntryForm.OTHER,
    description: 'Otras formas de entrada no categorizadas',
  },
];

@Command({
  name: 'create:default-entry-forms',
  description: 'Insert default entry forms',
})
export class CreateDefaultEntryForms extends CommandRunner {
  private readonly logger = new Logger(`create:default-entry-forms`);

  constructor(
    private readonly entryFormService: EntryFormService,
  ) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    this.logger.log('Creating default entry forms...', {
      passedParams,
      options,
    });

    await Promise.allSettled(
      defaultEntryForms.map((entryForm) => {
        return this.entryFormService.create(entryForm);
      }),
    );

    this.logger.log('Default entry forms created successfully');
  }
}