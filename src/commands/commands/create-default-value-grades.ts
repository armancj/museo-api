import { Command, CommandRunner } from 'nest-commander';
import { Logger } from '@nestjs/common';
import { CreateValueGradeDto } from '../../nomenclator/value-grade/dto/create-value-grade.dto';
import { ValueGrade } from '../../nomenclator/value-grade/enum/value-grade.enum';
import { ValueGradeService } from '../../nomenclator/value-grade/value-grade.service';

// Create default value grades based on the ValueGrade enum
const defaultValueGrades: CreateValueGradeDto[] = [
  {
    name: ValueGrade.EXCEPTIONAL,
    description: 'Grado de valor excepcional para piezas de museo',
  },
  {
    name: ValueGrade.HIGH,
    description: 'Grado de valor alto para piezas de museo',
  },
  {
    name: ValueGrade.MEDIUM,
    description: 'Grado de valor medio para piezas de museo',
  },
  {
    name: ValueGrade.LOW,
    description: 'Grado de valor bajo para piezas de museo',
  },
  {
    name: ValueGrade.HISTORICAL,
    description: 'Grado de valor histórico para piezas de museo',
  },
  {
    name: ValueGrade.CULTURAL,
    description: 'Grado de valor cultural para piezas de museo',
  },
  {
    name: ValueGrade.SCIENTIFIC,
    description: 'Grado de valor científico para piezas de museo',
  },
  {
    name: ValueGrade.ARTISTIC,
    description: 'Grado de valor artístico para piezas de museo',
  },
  {
    name: ValueGrade.ARCHAEOLOGICAL,
    description: 'Grado de valor arqueológico para piezas de museo',
  },
  {
    name: ValueGrade.DOCUMENTARY,
    description: 'Grado de valor documental para piezas de museo',
  },
  {
    name: ValueGrade.EDUCATIONAL,
    description: 'Grado de valor educativo para piezas de museo',
  },
  {
    name: ValueGrade.RESEARCH,
    description: 'Grado de valor para investigación para piezas de museo',
  },
  {
    name: ValueGrade.OTHER,
    description: 'Otros grados de valor no categorizados',
  },
];

@Command({
  name: 'create:default-value-grades',
  description: 'Insert default museum value grades',
})
export class CreateDefaultValueGrades extends CommandRunner {
  private readonly logger = new Logger(`create:default-value-grades`);

  constructor(private readonly valueGradeService: ValueGradeService) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    this.logger.log('Creating default value grades...', {
      passedParams,
      options,
    });

    await Promise.allSettled(
      defaultValueGrades.map((valueGrade) => {
        return this.valueGradeService.create(valueGrade);
      }),
    );

    this.logger.log('Default value grades created successfully');
  }
}