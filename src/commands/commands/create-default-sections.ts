import { Command, CommandRunner } from 'nest-commander';
import { Logger } from '@nestjs/common';
import { CreateSectionDto } from '../../nomenclator/section/dto/create-section.dto';
import { Section } from '../../nomenclator/section/enum/section.enum';
import { SectionService } from '../../nomenclator/section/section.service';

// Create default sections based on the Section enum
const defaultSections: CreateSectionDto[] = [
  {
    name: Section.ADMINISTRATION,
    description: 'Sección para gestión administrativa del museo',
  },
  {
    name: Section.ARCHIVES,
    description: 'Sección de archivos históricos y documentales',
  },
  {
    name: Section.ARTIFACTS,
    description: 'Sección de artefactos y objetos museísticos',
  },
  {
    name: Section.AUDIOVISUAL,
    description: 'Sección de material audiovisual y multimedia',
  },
  {
    name: Section.BOOKS,
    description: 'Sección de libros y publicaciones',
  },
  {
    name: Section.CONSERVATION,
    description: 'Sección dedicada a la conservación de piezas',
  },
  {
    name: Section.DOCUMENTS,
    description: 'Sección de documentos históricos',
  },
  {
    name: Section.EXHIBITIONS,
    description: 'Sección de exposiciones temporales y permanentes',
  },
  {
    name: Section.HISTORICAL,
    description: 'Sección de contenido histórico general',
  },
  {
    name: Section.MANUSCRIPTS,
    description: 'Sección de manuscritos y documentos originales',
  },
  {
    name: Section.MAPS,
    description: 'Sección de mapas y cartografía',
  },
  {
    name: Section.PHOTOGRAPHS,
    description: 'Sección de fotografías y material fotográfico',
  },
  {
    name: Section.RARE_BOOKS,
    description: 'Sección de libros raros y ediciones especiales',
  },
  {
    name: Section.RESEARCH,
    description: 'Sección de investigación y estudios',
  },
  {
    name: Section.SPECIAL_COLLECTIONS,
    description: 'Sección de colecciones especiales y únicas',
  },
  {
    name: Section.OTHER,
    description: 'Otras secciones no categorizadas',
  },
];

@Command({
  name: 'create:default-sections',
  description: 'Insert default museum sections',
})
export class CreateDefaultSections extends CommandRunner {
  private readonly logger = new Logger(`create:default-sections`);

  constructor(private readonly sectionService: SectionService) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    this.logger.log('Creating default sections...', {
      passedParams,
      options,
    });

    await Promise.allSettled(
      defaultSections.map((section) => {
        return this.sectionService.create(section);
      }),
    );

    this.logger.log('Default sections created successfully');
  }
}
