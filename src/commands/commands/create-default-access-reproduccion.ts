import { Command, CommandRunner } from 'nest-commander';
import { Logger } from '@nestjs/common';
import { CreateAccessConditionDto } from '../../nomenclator/access-conditions/dto/create-access-condition.dto';
import { AccessCondition } from '../../nomenclator/common/enums/access-condition.enum';
import { AccessConditionsService } from '../../nomenclator/access-conditions/access-conditions.service';

const defaultAccessConditions: CreateAccessConditionDto[] = [
  {
    type: AccessCondition.FREE,
    description: 'Acceso y reproducción sin restricciones',
  },
  {
    type: AccessCondition.RESTRICTED,
    description: 'Acceso y reproducción que requiere autorización previa',
  },
];

@Command({
  name: 'create:default-access-conditions',
  description: 'Insert default access and reproduction conditions',
})
export class CreateDefaultAccessConditions extends CommandRunner {
  private readonly logger = new Logger(`create:default-access-conditions`);

  constructor(
    private readonly accessConditionsService: AccessConditionsService,
  ) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    this.logger.log('Creating default access conditions...', {
      passedParams,
      options,
    });

    await Promise.allSettled(
      defaultAccessConditions.map((condition) => {
        return this.accessConditionsService.create(condition);
      }),
    );

    this.logger.log('Default access conditions created successfully');
  }
}
