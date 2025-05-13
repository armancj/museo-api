import { Command, CommandRunner } from 'nest-commander';
import { Logger } from '@nestjs/common';
import { CreateReproductionConditionDto } from '../../nomenclator/reproduction-conditions/dto/create-reproduction-condition.dto';
import { AccessCondition } from '../../nomenclator/common/enums/access-condition.enum';
import { ReproductionConditionsService } from '../../nomenclator/reproduction-conditions/reproduction-conditions.service';

const defaultReproductionConditions: CreateReproductionConditionDto[] = [
  {
    name: AccessCondition.FREE,
    description: 'Reproducción sin restricciones',
  },
  {
    name: AccessCondition.RESTRICTED,
    description: 'Reproducción que requiere autorización previa',
  },
];

@Command({
  name: 'create:default-reproduction-conditions',
  description: 'Insert default reproduction conditions',
})
export class CreateDefaultReproductionConditions extends CommandRunner {
  private readonly logger = new Logger(
    `create:default-reproduction-conditions`,
  );

  constructor(
    private readonly reproductionConditionsService: ReproductionConditionsService,
  ) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    this.logger.log('Creating default reproduction conditions...', {
      passedParams,
      options,
    });

    await Promise.allSettled(
      defaultReproductionConditions.map((condition) => {
        return this.reproductionConditionsService.create(condition);
      }),
    );

    this.logger.log('Default reproduction conditions created successfully');
  }
}
