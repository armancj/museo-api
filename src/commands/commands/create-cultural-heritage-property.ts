import { Command, CommandRunner, Option } from 'nest-commander';
import { Inject, Logger } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { UserRoles } from '../../users/enum/user-roles.enum';
import { CulturalHeritagePropertyService } from '../../cultural-heritage-property/cultural-heritage-property/cultural-heritage-property.service';
import { CreateCulturalPropertyDto } from '../../cultural-heritage-property/cultural-heritage-property/dto/create-cultural-property.dto';
import { CreateCulturalNoteDto } from '../../cultural-heritage-property/cultural-notes/dto/create-cultural-note.dto';
import { CreateCulturalRecordDto } from '../../cultural-heritage-property/cultural-record/dto/create-cultural-record.dto';
import { CreateDescriptionControlDto } from '../../cultural-heritage-property/description-control/dto/create-description-control.dto';
import { CreateEntryAndLocationRecordDto } from '../../cultural-heritage-property/entry-and-location-record/dto/create-entry-and-location-record.dto';
import {
  GenericClassification,
  HeritageType,
} from '../../cultural-heritage-property/entry-and-location-record/enum/entry-and-location-record.enum';
import { InstitutionType } from '../../address/institutions/enum/institutions.enum';
import { CreateProducerAuthorRecordDto } from '../../cultural-heritage-property/producer-author-record/dto/create-producer-author-record.dto';
import {
  DescriptionLevel,
  ValueGrade,
} from '../../cultural-heritage-property/cultural-record/enum/cultural-record.enum';
import { User } from '../../users/entities/user.entity';

import * as fs from 'fs/promises';
import * as path from 'path';
import { CUBA_DATA, CubaProvinces } from './util/const';
import { UserModel } from '../../users/models/user.model';
import { CulturalNotesService } from '../../cultural-heritage-property/cultural-notes/cultural-notes.service';
import { CulturalRecordService } from '../../cultural-heritage-property/cultural-record/cultural-record.service';
import { DescriptionControlService } from '../../cultural-heritage-property/description-control/description-control.service';
import { EntryAndLocationRecordService } from '../../cultural-heritage-property/entry-and-location-record/entry-and-location-record.service';
import { ProducerAuthorRecordService } from '../../cultural-heritage-property/producer-author-record/producer-author-record.service';
import { UpdateAccessAndUseConditionDto } from '../../cultural-heritage-property/access-and-use-conditions/dto/update-access-and-use-condition.dto';
import { UpdateAssociatedDocumentationDto } from '../../cultural-heritage-property/associated-documentation/dto/update-associated-documentation.dto';
import { AssociatedDocumentationService } from '../../cultural-heritage-property/associated-documentation/associated-documentation.service';

interface CulturalObjectTemplate {
  type: string;
  objectTitle: string;
  description: string;
  artists: string[];
  dimensions: { height: number; width: number; length: number; weight: number };
  materials: string[];
  languages: string[];
  classification: GenericClassification;
  heritageType: HeritageType;
  valueGrade: ValueGrade;
}

interface CreationReport {
  startTime: Date;
  endTime?: Date;
  duration?: string;
  totalRequested: number;
  totalCreated: number;
  successful: number;
  failed: number;
  successRate: string;
  errors: string[];
  objectsPerSecond?: number;
  batches: {
    batchNumber: number;
    size: number;
    successful: number;
    failed: number;
    duration: number;
  }[];
}

@Command({
  name: 'create:cultural-heritage-property',
  description: 'Create multiple cultural heritage property objects with varied data',
})
export class CreateCulturalHeritageProperty extends CommandRunner {
  private readonly logger = new Logger('CreateCulturalHeritageProperty');
  private mock = { roles: UserRoles.superAdmin } as User;
  private creationReport: CreationReport;

  // Templates de objetos culturales variados
  private readonly culturalObjectTemplates: CulturalObjectTemplate[] = [
    {
      type: 'painting',
      objectTitle: 'Pintura Colonial',
      description:
        'Óleo sobre lienzo del período colonial cubano, representa escenas de la vida cotidiana de la época.',
      artists: ['José Nicolás de la Escalera', 'Vicente Escobar', 'Juan Jorge Peoli'],
      dimensions: { height: 60, width: 80, length: 3, weight: 2.5 },
      materials: ['Óleo', 'Lienzo', 'Marco de madera'],
      languages: ['Español'],
      classification: GenericClassification.HUMAN_MADE_OBJECT,
      heritageType: HeritageType.MOVABLE_HERITAGE,
      valueGrade: ValueGrade.II,
    },
    {
      type: 'sculpture',
      objectTitle: 'Escultura Contemporánea',
      description:
        'Escultura en bronce que representa la lucha del pueblo cubano por la independencia.',
      artists: ['Rita Longa', 'Teodoro Ramos Blanco', 'José Villa Soberón'],
      dimensions: { height: 150, width: 60, length: 40, weight: 45.0 },
      materials: ['Bronce', 'Piedra', 'Metal'],
      languages: ['Español'],
      classification: GenericClassification.HUMAN_MADE_OBJECT,
      heritageType: HeritageType.MOVABLE_HERITAGE,
      valueGrade: ValueGrade.I,
    },
    {
      type: 'photograph',
      objectTitle: 'Fotografía Histórica',
      description:
        'Fotografía en blanco y negro que documenta momentos históricos de Cuba en el siglo XX.',
      artists: ['Constantino Arias', 'Korda', 'Jesse Fernández'],
      dimensions: { height: 25, width: 35, length: 0.1, weight: 0.2 },
      materials: ['Papel fotográfico', 'Gelatina de plata', 'Marco'],
      languages: ['Español'],
      classification: GenericClassification.HUMAN_MADE_OBJECT,
      heritageType: HeritageType.MOVABLE_HERITAGE,
      valueGrade: ValueGrade.II,
    },
    {
      type: 'manuscript',
      objectTitle: 'Documento Manuscrito',
      description:
        'Manuscrito original con textos históricos y literarios de escritores cubanos importantes.',
      artists: ['José Martí', 'Nicolás Guillén', 'Alejo Carpentier'],
      dimensions: { height: 30, width: 21, length: 1, weight: 0.5 },
      materials: ['Papel', 'Tinta', 'Pergamino'],
      languages: ['Español', 'Francés'],
      classification: GenericClassification.HUMAN_MADE_OBJECT,
      heritageType: HeritageType.MOVABLE_HERITAGE,
      valueGrade: ValueGrade.I,
    },
    {
      type: 'instrument',
      objectTitle: 'Instrumento Musical',
      description:
        'Instrumento musical tradicional cubano utilizado en la música folclórica y popular.',
      artists: ['Fabricantes tradicionales cubanos', 'Artesanos de La Habana'],
      dimensions: { height: 40, width: 20, length: 60, weight: 3.0 },
      materials: ['Madera', 'Cuero', 'Metal', 'Cuerda'],
      languages: ['Español'],
      classification: GenericClassification.HUMAN_MADE_OBJECT,
      heritageType: HeritageType.MOVABLE_HERITAGE,
      valueGrade: ValueGrade.II,
    },
    {
      type: 'textile',
      objectTitle: 'Textil Tradicional',
      description: 'Textil tradicional cubano con bordados y técnicas ancestrales de confección.',
      artists: ['Artesanas tradicionales', 'Bordadoras de Matanzas'],
      dimensions: { height: 180, width: 120, length: 0.5, weight: 1.2 },
      materials: ['Algodón', 'Seda', 'Hilo bordado', 'Tinte natural'],
      languages: ['Español'],
      classification: GenericClassification.HUMAN_MADE_OBJECT,
      heritageType: HeritageType.MOVABLE_HERITAGE,
      valueGrade: ValueGrade.III,
    },
    {
      type: 'ceramic',
      objectTitle: 'Cerámica Tradicional',
      description:
        'Pieza de cerámica tradicional cubana con técnicas de alfarería heredadas de los pueblos originarios.',
      artists: ['Alfareros de Camagüey', 'Ceramistas tradicionales'],
      dimensions: { height: 25, width: 25, length: 25, weight: 2.8 },
      materials: ['Arcilla', 'Esmalte', 'Pigmentos naturales'],
      languages: ['Español'],
      classification: GenericClassification.HUMAN_MADE_OBJECT,
      heritageType: HeritageType.MOVABLE_HERITAGE,
      valueGrade: ValueGrade.III,
    },
    {
      type: 'ethnographic',
      objectTitle: 'Objeto Etnográfico',
      description:
        'Objeto etnográfico que representa las tradiciones culturales y religiosas afrocubanas.',
      artists: ['Artesanos religiosos', 'Santeros tradicionales'],
      dimensions: { height: 30, width: 15, length: 15, weight: 1.5 },
      materials: ['Madera', 'Caracolas', 'Piedras', 'Textil'],
      languages: ['Español', 'Yoruba'],
      classification: GenericClassification.HUMAN_MADE_OBJECT,
      heritageType: HeritageType.MOVABLE_HERITAGE,
      valueGrade: ValueGrade.II,
    },
  ];

  constructor(
    private readonly usersService: UsersService,
    private readonly culturalHeritagePropertyService: CulturalHeritagePropertyService,
    @Inject('ACCESS_AND_USE_CONDITIONS_SERVICE')
    private readonly accessAndUseConditionsService: any,
    private readonly associatedDocumentationService: AssociatedDocumentationService,
    private readonly culturalNotesService: CulturalNotesService,
    private readonly culturalRecordService: CulturalRecordService,
    private readonly descriptionControlService: DescriptionControlService,
    private readonly entryAndLocationRecordService: EntryAndLocationRecordService,
    private readonly producerAuthorRecordService: ProducerAuthorRecordService,
  ) {
    super();
  }

  async run(passedParams: string[], options?: Record<string, any>): Promise<void> {
    // Inicializar reporte
    this.creationReport = {
      startTime: new Date(),
      totalRequested: 0,
      totalCreated: 0,
      successful: 0,
      failed: 0,
      successRate: '0%',
      errors: [],
      batches: [],
    };

    // Parámetros configurables
    const totalObjects = parseInt(options?.totalObjects || '50');
    const batchSize = parseInt(options?.batchSize || '10');
    const objectType = options?.type || 'all';
    const province = options?.province as CubaProvinces;
    const delayBetweenBatches = parseInt(options?.delay || '1000');

    this.creationReport.totalRequested = totalObjects;

    this.logger.log(`🚀 Iniciando creación de ${totalObjects} objetos culturales...`, {
      totalObjects,
      batchSize,
      objectType,
      province,
      delayBetweenBatches,
    });

    try {
      // Obtener usuarios técnicos
      const technicalUsers = await this.getTechnicalUsers();
      if (!technicalUsers.length) {
        this.logger.warn('❌ No se encontraron usuarios técnicos');
        return;
      }

      // Generar datos de objetos culturales
      const culturalObjects = this.generateCulturalObjects(totalObjects, objectType, province);

      // Crear objetos en lotes
      await this.createObjectsInBatches(
        culturalObjects,
        technicalUsers as User[],
        batchSize,
        delayBetweenBatches,
      );
    } catch (error) {
      this.logger.error('❌ Error durante la creación de objetos culturales:', error.stack);
      this.creationReport.errors.push(error.message);
    } finally {
      // Finalizar reporte
      await this.finalizeReport();
    }
  }

  /**
   * Obtiene usuarios técnicos del sistema
   */
  private async getTechnicalUsers(): Promise<UserModel[]> {
    const technicalUsers = await this.usersService.findAll(
      { perPage: 100, page: 1 },
      { roles: UserRoles.employee, deleted: false },
      this.mock,
    );

    this.logger.log(`👥 Encontrados ${technicalUsers.users.getLongitude()} usuarios técnicos`);
    return technicalUsers.users.value;
  }

  /**
   * Genera datos variados de objetos culturales
   */
  private generateCulturalObjects(
    count: number,
    objectType: string,
    province?: CubaProvinces,
  ): any[] {
    const objects = [];
    const templates =
      objectType === 'all'
        ? this.culturalObjectTemplates
        : this.culturalObjectTemplates.filter(t => t.type === objectType);

    const provinces = province ? [province] : (Object.keys(CUBA_DATA) as CubaProvinces[]);

    for (let i = 0; i < count; i++) {
      const template = templates[i % templates.length];
      const selectedProvince = provinces[i % provinces.length];
      const municipalities = CUBA_DATA[selectedProvince];
      const municipality = municipalities[i % municipalities.length];

      objects.push({
        template,
        province: selectedProvince,
        municipality,
        index: i + 1,
      });
    }

    return objects;
  }

  /**
   * Crea objetos culturales en lotes para optimizar rendimiento
   */
  private async createObjectsInBatches(
    culturalObjects: any[],
    technicalUsers: User[],
    batchSize: number,
    delay: number,
  ): Promise<void> {
    const batches = this.createBatches(culturalObjects, batchSize);

    this.logger.log(`📦 Procesando ${batches.length} lotes de ${batchSize} objetos cada uno`);

    for (let i = 0; i < batches.length; i++) {
      const batchStartTime = Date.now();
      const batch = batches[i];

      this.logger.log(`⚡ Procesando lote ${i + 1}/${batches.length} (${batch.length} objetos)`);

      const batchPromises = batch.map(async (objectData, index) => {
        const user = technicalUsers[index % technicalUsers.length];
        return this.createCompleteCulturalObject(objectData, user);
      });

      const results = await Promise.allSettled(batchPromises);
      const batchDuration = Date.now() - batchStartTime;

      // Analizar resultados del lote
      const batchSuccessful = results.filter(r => r.status === 'fulfilled').length;
      const batchFailed = results.filter(r => r.status === 'rejected').length;

      // Actualizar estadísticas globales
      this.creationReport.successful += batchSuccessful;
      this.creationReport.failed += batchFailed;
      this.creationReport.totalCreated += results.length;

      // Agregar errores al reporte
      results
        .filter(r => r.status === 'rejected')
        .forEach(r => this.creationReport.errors.push((r as PromiseRejectedResult).reason.message));

      // Registrar estadísticas del lote
      this.creationReport.batches.push({
        batchNumber: i + 1,
        size: batch.length,
        successful: batchSuccessful,
        failed: batchFailed,
        duration: batchDuration,
      });

      this.logger.log(
        `✅ Lote ${i + 1} completado: ${batchSuccessful} exitosos, ${batchFailed} fallidos (${batchDuration}ms)`,
      );

      // Pausa entre lotes para no sobrecargar el sistema
      if (i < batches.length - 1 && delay > 0) {
        await this.delay(delay);
      }
    }
  }

  /**
   * Crea un objeto cultural completo con todos sus componentes
   */
  private async createCompleteCulturalObject(objectData: any, user: User): Promise<any> {
    try {
      // Paso 1: Crear la propiedad cultural base
      const culturalProperty = await this.culturalHeritagePropertyService.created(
        new CreateCulturalPropertyDto(),
      );

      const { template, province, municipality, index } = objectData;

      this.logger.debug(
        `📝 Creando ${template.type} #${index} para ${province}, ${municipality} (UUID: ${culturalProperty.uuid})`,
      );

      // Ejecutar todos los pasos en paralelo para mejor rendimiento
      await Promise.all([
        this.addAccessAndUseConditions(culturalProperty.uuid, user, template),
        this.addAssociatedDocumentation(culturalProperty.uuid, user, template),
        this.addCulturalNotes(culturalProperty.uuid, user, template),
        this.addCulturalRecord(
          culturalProperty.uuid,
          user,
          template,
          province,
          municipality,
          index,
        ),
        this.addDescriptionControl(culturalProperty.uuid, user),
        this.addEntryAndLocationRecord(
          culturalProperty.uuid,
          user,
          template,
          province,
          municipality,
          index,
        ),
        this.addProducerAuthorRecord(culturalProperty.uuid, user, template, province, municipality),
      ]);

      return culturalProperty;
    } catch (error) {
      this.logger.error(`❌ Error creando objeto cultural:`, error.message);
      throw error;
    }
  }

  /**
   * Crea lotes de objetos
   */
  private createBatches<T>(items: T[], batchSize: number): T[][] {
    const batches: T[][] = [];
    for (let i = 0; i < items.length; i += batchSize) {
      batches.push(items.slice(i, i + batchSize));
    }
    return batches;
  }

  /**
   * Añade condiciones de acceso y uso variadas según el tipo de objeto
   */
  private async addAccessAndUseConditions(
    uuid: string,
    user: User,
    template: CulturalObjectTemplate,
  ): Promise<void> {
    try {
      const accessConditions = this.createVariedAccessAndUseConditions(template, user);

      await this.accessAndUseConditionsService.update(uuid, accessConditions);
    } catch (error) {
      this.logger.debug(`⚠️ Error agregando condiciones de acceso a ${uuid}: ${error.message}`);
      throw error;
    }
  }

  /**
   * Crea condiciones de acceso variadas según el tipo de objeto
   */
  private createVariedAccessAndUseConditions(
    template: CulturalObjectTemplate,
    user: User,
  ): UpdateAccessAndUseConditionDto {
    const accessLevels: Record<string, string[]> = {
      painting: ['Acceso restringido', 'Solo personal autorizado', 'Requiere cita previa'],
      sculpture: ['Acceso libre en horarios específicos', 'Supervisión requerida'],
      photograph: ['Acceso libre', 'Disponible para investigación'],
      manuscript: ['Acceso muy restringido', 'Solo investigadores acreditados'],
      instrument: ['Acceso supervisado', 'Manejo especializado requerido'],
      textile: ['Acceso controlado', 'Condiciones ambientales específicas'],
      ceramic: ['Acceso moderado', 'Manipulación cuidadosa'],
      ethnographic: ['Acceso cultural sensible', 'Consulta con comunidades origen'],
    };

    const reproductionRules: Record<string, string[]> = {
      painting: ['Reproducción con autorización', 'Fines educativos permitidos'],
      sculpture: ['Prohibida reproducción comercial', 'Solo documentación científica'],
      photograph: ['Derechos de autor protegidos', 'Uso académico limitado'],
      manuscript: ['Reproducción muy restringida', 'Solo transcripciones autorizadas'],
      instrument: ['Grabaciones permitidas con autorización', 'Uso cultural permitido'],
      textile: ['Reproducción artesanal permitida', 'Documentación técnica autorizada'],
      ceramic: ['Réplicas autorizadas para educación', 'Estudios arqueológicos permitidos'],
      ethnographic: ['Consulta obligatoria con comunidades', 'Respeto a tradiciones sagradas'],
    };

    const technicalReqs: Record<string, string> = {
      painting: 'Control de humedad y temperatura, iluminación UV controlada',
      sculpture: 'Superficie estable, protección contra vibraciones',
      photograph: 'Almacenamiento libre de ácidos, baja luminosidad',
      manuscript: 'Condiciones de archivo, manipulación con guantes',
      instrument: 'Ambiente seco, evitar cambios térmicos bruscos',
      textile: 'Almacenamiento horizontal, protección contra insectos',
      ceramic: 'Soporte acolchado, evitar impactos',
      ethnographic: 'Condiciones culturalmente apropiadas, consulta ritual',
    };

    return {
      accessConditions: {
        value: accessLevels[template.type] || ['Acceso general'],
        status: { status: 'To Review' },
        comment: `Condiciones de acceso para ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      reproductionConditions: {
        value: reproductionRules[template.type] || ['Reproducción con autorización'],
        status: { status: 'To Review' },
        comment: `Condiciones de reproducción para ${template.type}`,
        modifiedBy: '',
        history: [],
      },
      technicalRequirements: {
        value: technicalReqs[template.type] || 'Condiciones estándar de conservación',
        status: { status: 'To Review' },
        comment: `Requisitos técnicos para ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
    };
  }

  /**
   * Añade documentación asociada específica para cada tipo de objeto
   */
  private async addAssociatedDocumentation(
    uuid: string,
    user: User,
    template: CulturalObjectTemplate,
  ): Promise<void> {
    try {
      const documentation = this.createVariedAssociatedDocumentation(template, user);
      await this.associatedDocumentationService.update(uuid, documentation);
    } catch (error) {
      this.logger.debug(`⚠️ Error agregando documentación a ${uuid}: ${error.message}`);
      throw error;
    }
  }

  /**
   * Crea documentación asociada variada según el tipo de objeto
   */
  private createVariedAssociatedDocumentation(
    template: CulturalObjectTemplate,
    user: User,
  ): UpdateAssociatedDocumentationDto {
    const documentationByType: Record<
      string,
      {
        copies: string;
        originals: string;
        related: string;
        publications: string;
      }
    > = {
      painting: {
        copies: 'Fotografías digitales de alta resolución, radiografías técnicas',
        originals: 'Obra original en depósito climatizado, estudios de pigmentos',
        related: 'Colección de pintura colonial cubana, archivo de técnicas pictóricas',
        publications: 'Catálogo "Arte Colonial en Cuba" (2019), Revista Arte Cubano vol. 32',
      },
      sculpture: {
        copies: 'Modelos 3D digitales, moldes en yeso de seguridad',
        originals: 'Escultura original en sala de exposición permanente',
        related: 'Archivo de escultura cubana contemporánea, bocetos preparatorios',
        publications: 'Monografía "Escultura Cubana del siglo XX", Boletín de Museos vol. 15',
      },
      photograph: {
        copies: 'Digitalizaciones RAW y TIFF, copias de época en archivo',
        originals: 'Negativos originales en condiciones controladas',
        related: 'Archivo fotográfico nacional, colección de fotografía histórica',
        publications: 'Libro "Cuba en Imágenes", Revista de Fotografía Histórica',
      },
    };

    const defaultDocs = documentationByType[template.type] || {
      copies: 'Documentación digital disponible en archivo central',
      originals: 'Pieza original conservada en depósito principal',
      related: 'Relacionado con colección principal del museo',
      publications: 'Incluido en catálogo general de la institución',
    };

    return {
      copiesExistenceAndLocation: {
        value: defaultDocs.copies,
        status: { status: 'To Review' },
        comment: `Información sobre copias de ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      originalsExistenceAndLocation: {
        value: defaultDocs.originals,
        status: { status: 'To Review' },
        comment: `Ubicación de originales de ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      relatedDescriptionUnits: {
        value: defaultDocs.related,
        status: { status: 'To Review' },
        comment: `Unidades relacionadas con ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      relatedPublicationsInformation: {
        value: defaultDocs.publications,
        status: { status: 'To Review' },
        comment: `Publicaciones sobre ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
    };
  }

  /**
   * Añade notas culturales específicas para cada tipo de objeto
   */
  private async addCulturalNotes(
    uuid: string,
    user: User,
    template: CulturalObjectTemplate,
  ): Promise<void> {
    try {
      const notes = this.createVariedCulturalNotes(template, user);

      await this.culturalNotesService.update(uuid, notes);
    } catch (error) {
      this.logger.debug(`⚠️ Error agregando notas culturales a ${uuid}: ${error.message}`);
      throw error;
    }
  }

  /**
   * Crea notas culturales específicas por tipo de objeto
   */
  private createVariedCulturalNotes(
    template: CulturalObjectTemplate,
    user: User,
  ): CreateCulturalNoteDto {
    const notesByType: Record<string, string> = {
      painting: `Esta pintura colonial representa un ejemplo excepcional del arte cubano del siglo XVIII. 
        La técnica empleada muestra influencias tanto europeas como locales, evidenciando la fusión cultural 
        característica del período colonial. El estado de conservación permite apreciar los detalles originales 
        de la composición y la paleta cromática típica de la época.`,

      sculpture: `Escultura que refleja las tendencias artísticas contemporáneas cubanas, incorporando elementos 
        simbólicos de la identidad nacional. La técnica utilizada demuestra el dominio de los artistas locales 
        en el trabajo con materiales tradicionales. Ha sido expuesta en importantes muestras nacionales e 
        internacionales.`,

      photograph: `Fotografía histórica de gran valor documental que captura aspectos importantes de la sociedad 
        cubana del siglo XX. La calidad técnica y el contenido la convierten en un testimonio visual único. 
        Forma parte de un conjunto mayor que documenta la evolución social y cultural del país.`,

      manuscript: `Manuscrito original que constituye un testimonio literario e histórico de primer orden. 
        La caligrafía y el contenido reflejan el pensamiento y la cultura de su época. Su valor trasciende 
        lo meramente documental para convertirse en patrimonio cultural inmaterial.`,

      instrument: `Instrumento musical tradicional que representa la riqueza del patrimonio sonoro cubano. 
        Su construcción artesanal evidencia técnicas transmitidas de generación en generación. Mantiene 
        características sonoras únicas que lo hacen representativo de la música folclórica nacional.`,

      textile: `Textil tradicional que demuestra la maestría de los artesanos cubanos en técnicas ancestrales. 
        Los patrones y colores reflejan influencias culturales diversas que se fusionaron en el territorio 
        cubano. Su estado de conservación permite estudiar las técnicas y materiales utilizados.`,

      ceramic: `Pieza cerámica que ejemplifica las tradiciones alfareras cubanas, mostrando técnicas que 
        combinan herencias indígenas, africanas y europeas. Su forma y decoración son representativas 
        de los estilos regionales desarrollados en la isla.`,

      ethnographic: `Objeto etnográfico de gran significado cultural dentro de las tradiciones afrocubanas. 
        Su importancia trasciende lo material para convertirse en portador de valores espirituales y 
        culturales. Representa la continuidad de prácticas ancestrales en el contexto cubano contemporáneo.`,
    };

    return {
      notes: {
        value: notesByType[template.type] || template.description,
        status: { status: 'To Review' },
        comment: `Notas culturales para ${template.type} generadas automáticamente`,
        modifiedBy: user?.uuid,
        history: [],
      },
    };
  }

  /**
   * Añade registro cultural completo y variado
   */
  private async addCulturalRecord(
    uuid: string,
    user: User,
    template: CulturalObjectTemplate,
    province: string,
    municipality: string,
    index: number,
  ): Promise<void> {
    try {
      const record = this.createVariedCulturalRecord(template, province, municipality, index, user);

      // 🎯 Llamada directa al servicio
      await this.culturalRecordService.update(uuid, record);
    } catch (error) {
      this.logger.debug(`⚠️ Error agregando registro cultural a ${uuid}: ${error.message}`);
      throw error;
    }
  }

  /**
   * Crea registro cultural variado según template y ubicación
   */
  private createVariedCulturalRecord(
    template: CulturalObjectTemplate,
    province: string,
    municipality: string,
    index: number,
    user: User,
  ): CreateCulturalRecordDto {
    const randomArtist = template.artists[Math.floor(Math.random() * template.artists.length)];

    // Generar volúmenes variados según tipo
    const volumesByType: Record<string, any> = {
      painting: { objects: 1, photos: 5, pages: 0, books: 0 },
      sculpture: { objects: 1, photos: 8, pages: 0, books: 0 },
      photograph: { photos: 1, negatives: 1, slides: 0, pages: 0 },
      manuscript: { pages: Math.floor(Math.random() * 50) + 10, books: 1, objects: 0 },
      instrument: { objects: 1, photos: 3, pages: 0, books: 0 },
      textile: { objects: 1, photos: 4, pages: 0, books: 0 },
      ceramic: { objects: 1, photos: 6, pages: 0, books: 0 },
      ethnographic: { objects: 1, photos: 5, pages: 0, books: 0 },
    };

    const baseVolumes = volumesByType[template.type] || { objects: 1, photos: 2 };
    const volumes = {
      books: baseVolumes.books || 0,
      engravings: Math.floor(Math.random() * 3),
      file: Math.floor(Math.random() * 5) + 1,
      mapsPlansSketches: Math.floor(Math.random() * 4),
      negatives: baseVolumes.negatives || 0,
      objects: baseVolumes.objects || 1,
      pages: baseVolumes.pages || 0,
      photos: baseVolumes.photos || Math.floor(Math.random() * 8) + 2,
      slides: baseVolumes.slides || Math.floor(Math.random() * 10),
    };

    // Estados de conservación variados
    const conservationStates = [
      ['Excelente', 'Sin restauraciones'],
      ['Bueno', 'Restaurado'],
      ['Regular', 'Requiere conservación'],
      ['Bueno', 'Conservación preventiva'],
      ['Excelente', 'Recientemente restaurado'],
    ];
    const randomConservation =
      conservationStates[Math.floor(Math.random() * conservationStates.length)];

    return {
      objectTitle: {
        value: `${template.objectTitle} de ${province} #${index}`,
        status: { status: 'To Review' },
        comment: `Título del objeto ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      objectDescription: {
        value: `${template.description} Procedente de ${municipality}, ${province}. ${randomArtist ? `Relacionado con la obra de ${randomArtist}.` : ''}`,
        status: { status: 'To Review' },
        comment: `Descripción detallada del ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      valueGrade: {
        value: template.valueGrade,
        status: { status: 'To Review' },
        comment: `Grado de valor para ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      descriptionLevel: {
        value: DescriptionLevel.Level2,
        status: { status: 'To Review' },
        comment: 'Nivel de descripción estándar',
        modifiedBy: user?.uuid,
        history: [],
      },
      volumesQuantities: {
        value: volumes,
        status: { status: 'To Review' },
        comment: `Volúmenes y cantidades para ${template.type}`,
        modifiedBy: user.uuid,
        history: [],
      },
      dimensions: {
        value: {
          heightCms: template.dimensions.height + Math.floor(Math.random() * 10) - 5,
          widthCms: template.dimensions.width + Math.floor(Math.random() * 10) - 5,
          lengthCms: template.dimensions.length + Math.floor(Math.random() * 2),
          weightKg: template.dimensions.weight + Math.random() - 0.5,
        },
        status: { status: 'To Review' },
        comment: `Dimensiones aproximadas del ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      languages: {
        value: template.languages,
        status: { status: 'To Review' },
        comment: `Idiomas presentes en el ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      supports: {
        value: template.materials,
        status: { status: 'To Review' },
        comment: `Materiales y soportes del ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      letters: {
        value: ['A', 'B', 'C'].slice(0, Math.floor(Math.random() * 3) + 1),
        status: { status: 'To Review' },
        comment: 'Clasificación por letras',
        modifiedBy: user?.uuid,
        history: [],
      },
      descriptionInstrument: {
        value: ['Ficha técnica', 'Catálogo especializado', 'Base de datos'],
        status: { status: 'To Review' },
        comment: 'Instrumentos de descripción utilizados',
        modifiedBy: user?.uuid,
        history: [],
      },
      conservationState: {
        value: randomConservation,
        status: { status: 'To Review' },
        comment: `Estado de conservación del ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      backgroundTitle: {
        value: `Patrimonio Cultural de ${province}`,
        status: { status: 'To Review' },
        comment: 'Contexto patrimonial regional',
        modifiedBy: user?.uuid,
        history: [],
      },
      sectionTitle: {
        value: `Colección de ${template.type.charAt(0).toUpperCase() + template.type.slice(1)}`,
        status: { status: 'To Review' },
        comment: 'Sección temática del museo',
        modifiedBy: user?.uuid,
        history: [],
      },
      onomasticDescriptors: {
        value: `${randomArtist}, Artistas de ${province}`,
        status: { status: 'To Review' },
        comment: 'Descriptores de nombres y personas',
        modifiedBy: user?.uuid,
        history: [],
      },
      geographicDescriptors: {
        value: `${municipality}, ${province}, Cuba`,
        status: { status: 'To Review' },
        comment: 'Descriptores geográficos',
        modifiedBy: user?.uuid,
        history: [],
      },
      institutionalDescriptors: {
        value: `Museo Nacional, Patrimonio Cultural Cubano`,
        status: { status: 'To Review' },
        comment: 'Descriptores institucionales',
        modifiedBy: user?.uuid,
        history: [],
      },
      subjectDescriptors: {
        value: `${template.type}, Arte cubano, Patrimonio cultural, ${province}`,
        status: { status: 'To Review' },
        comment: 'Descriptores temáticos',
        modifiedBy: user?.uuid,
        history: [],
      },
      valuation: {
        value: Math.floor(Math.random() * 50000) + 5000,
        status: { status: 'To Review' },
        comment: `Valoración económica del ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
    };
  }

  /**
   * Añade control de descripción con fechas realistas
   */
  private async addDescriptionControl(uuid: string, user: User): Promise<void> {
    try {
      const control = this.createVariedDescriptionControl(user);
      await this.descriptionControlService.update(uuid, control);
    } catch (error) {
      this.logger.debug(`⚠️ Error agregando control de descripción a ${uuid}: ${error.message}`);
      throw error;
    }
  }

  /**
   * Crea control de descripción con fechas variadas
   */
  private createVariedDescriptionControl(user: User): CreateDescriptionControlDto {
    const now = new Date();
    const descriptionDate = new Date(now.getTime() - Math.random() * 90 * 24 * 60 * 60 * 1000); // Últimos 90 días
    const reviewDate = new Date(
      descriptionDate.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000,
    ); // Hasta 30 días después

    const catalogers = [
      'María González, Especialista en Catalogación',
      'Carlos Rodríguez, Técnico en Patrimonio',
      'Ana Martínez, Conservadora',
      'José Fernández, Historiador del Arte',
      'Laura Pérez, Documentalista',
    ];

    const reviewers = [
      'Dr. Roberto Silva, Curador Jefe',
      'Lic. Carmen López, Directora de Colecciones',
      'MSc. Eduardo Ramos, Especialista Senior',
      'Dra. Isabel Torres, Investigadora Principal',
    ];

    return {
      descriptionDateTime: {
        value: descriptionDate,
        status: { status: 'To Review' },
        comment: 'Fecha de catalogación del objeto',
        modifiedBy: user.uuid,
        history: [],
      },
      descriptionMadeBy: {
        value: catalogers[Math.floor(Math.random() * catalogers.length)],
        status: { status: 'To Review' },
        comment: 'Profesional responsable de la catalogación',
        modifiedBy: user?.uuid,
        history: [],
      },
      reviewDateTime: {
        value: reviewDate,
        status: { status: 'To Review' },
        comment: 'Fecha de revisión técnica',
        modifiedBy: user?.uuid,
        history: [],
      },
      reviewedBy: {
        value: reviewers[Math.floor(Math.random() * reviewers.length)],
        status: { status: 'To Review' },
        comment: 'Especialista que realizó la revisión',
        modifiedBy: user?.uuid,
        history: [],
      },
    };
  }

  /**
   * Añade registro de entrada y ubicación específico
   */
  private async addEntryAndLocationRecord(
    uuid: string,
    user: User,
    template: CulturalObjectTemplate,
    province: string,
    municipality: string,
    index: number,
  ): Promise<void> {
    try {
      const record = this.createVariedEntryAndLocationRecord(
        template,
        province,
        municipality,
        index,
        user,
      );

      await this.entryAndLocationRecordService.update(uuid, record);
    } catch (error) {
      this.logger.debug(`⚠️ Error agregando registro de entrada a ${uuid}: ${error.message}`);
      throw error;
    }
  }

  /**
   * Crea registro de entrada y ubicación variado
   */
  private createVariedEntryAndLocationRecord(
    template: CulturalObjectTemplate,
    province: string,
    municipality: string,
    index: number,
    user: User,
  ): CreateEntryAndLocationRecordDto {
    const entryMethods = [
      'Donación particular',
      'Adquisición institucional',
      'Transferencia de otra institución',
      'Hallazgo arqueológico',
      'Legado familiar',
      'Compra especializada',
      'Intercambio cultural',
    ];

    const entryDate = new Date(
      2020 + Math.floor(Math.random() * 4), // 2020-2023
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
    );

    // Ubicaciones variadas según el tipo de objeto
    const locationByType: Record<string, any> = {
      painting: {
        storage: 'Depósito de Pintura Colonial',
        exhibitionRoom: 'Sala de Arte Colonial',
        floor: 'Segunda Planta',
        showcaseShelf: `Vitrina PC-${Math.floor(Math.random() * 20) + 1}`,
        shelfDrawer: `Estante ${Math.floor(Math.random() * 10) + 1}`,
      },
      sculpture: {
        storage: 'Depósito de Escultura',
        exhibitionRoom: 'Sala de Arte Contemporáneo',
        floor: 'Planta Baja',
        showcaseShelf: `Pedestal ES-${Math.floor(Math.random() * 15) + 1}`,
      },
      photograph: {
        storage: 'Archivo Fotográfico',
        fileFolder: `Carpeta FH-${Math.floor(Math.random() * 100) + 1}`,
        box: `Caja ${Math.floor(Math.random() * 50) + 1}`,
        floor: 'Sótano',
      },
    };

    const defaultLocation = {
      storage: `Depósito General ${province}`,
      exhibitionRoom: `Sala ${municipality}`,
      floor: 'Planta Baja',
      box: `Caja ${Math.floor(Math.random() * 100) + 1}`,
      fileFolder: `Carpeta ${Math.floor(Math.random() * 50) + 1}`,
      shelfDrawer: `Estante ${Math.floor(Math.random() * 20) + 1}`,
      showcaseShelf: `Vitrina ${Math.floor(Math.random() * 30) + 1}`,
    };

    const location = locationByType[template.type] || defaultLocation;

    return {
      auxiliaryInventory: {
        value: Math.random() > 0.7,
        status: { status: 'To Review' },
        comment: 'Inventario auxiliar según necesidades',
        modifiedBy: user?.uuid,
        history: [],
      },
      declarationType: {
        value:
          template.valueGrade === ValueGrade.I
            ? 'Bien de Interés Cultural'
            : 'Patrimonio Cultural Mueble',
        status: { status: 'To Review' },
        comment: 'Tipo de declaración patrimonial',
        modifiedBy: user?.uuid,
        history: [],
      },
      entryDate: {
        value: entryDate,
        status: { status: 'To Review' },
        comment: 'Fecha de ingreso a la colección',
        modifiedBy: user?.uuid,
        history: [],
      },
      entryMethod: {
        value: entryMethods[Math.floor(Math.random() * entryMethods.length)],
        status: { status: 'To Review' },
        comment: 'Método de adquisición',
        modifiedBy: user?.uuid,
        history: [],
      },
      genericClassification: {
        value: template.classification,
        status: { status: 'To Review' },
        comment: `Clasificación genérica para ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      heritageType: {
        value: template.heritageType,
        status: { status: 'To Review' },
        comment: 'Tipo de patrimonio cultural',
        modifiedBy: user?.uuid,
        history: [],
      },
      initialDescription: {
        value: `${template.objectTitle} procedente de ${municipality}, ${province}. ${template.description}`,
        status: { status: 'To Review' },
        comment: 'Descripción inicial de ingreso',
        modifiedBy: user?.uuid,
        history: [],
      },
      institutionType: {
        value: InstitutionType.MUSEUM,
        status: { status: 'To Review' },
        comment: 'Tipo de institución custodio',
        modifiedBy: user?.uuid,
        history: [],
      },
      inventoryNumber: {
        value: `${template.type.toUpperCase().substring(0, 2)}-${province.substring(0, 2).toUpperCase()}-${String(index).padStart(4, '0')}`,
        status: { status: 'To Review' },
        comment: 'Número de inventario único',
        modifiedBy: user?.uuid,
        history: [],
      },
      objectLocation: {
        value: location,
        status: { status: 'To Review' },
        comment: `Ubicación física del ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      objectName: {
        value: `${template.objectTitle} - ${municipality}`,
        status: { status: 'To Review' },
        comment: 'Denominación específica del objeto',
        modifiedBy: user?.uuid,
        history: [],
      },
      pieceInventory: {
        value: true,
        status: { status: 'To Review' },
        comment: 'Inventario individual de la pieza',
        modifiedBy: user?.uuid,
        history: [],
      },
    };
  }

  /**
   * Añade registro de productor/autor con información geográfica
   */
  private async addProducerAuthorRecord(
    uuid: string,
    user: User,
    template: CulturalObjectTemplate,
    province: string,
    municipality: string,
  ): Promise<void> {
    try {
      const record = this.createVariedProducerAuthorRecord(template, province, municipality, user);

      await this.producerAuthorRecordService.update(uuid, record);
    } catch (error) {
      this.logger.debug(`⚠️ Error agregando registro de productor a ${uuid}: ${error.message}`);
      throw error;
    }
  }

  /**
   * Crea registro de productor/autor variado según ubicación
   */
  private createVariedProducerAuthorRecord(
    template: CulturalObjectTemplate,
    province: string,
    municipality: string,
    user: User,
  ): CreateProducerAuthorRecordDto {
    const randomArtist = template.artists[Math.floor(Math.random() * template.artists.length)];

    // Direcciones variadas por provincia
    const streetsByProvince: Record<string, string[]> = {
      'La Habana': ['Calle Obispo', 'Avenida 23', 'Malecón', 'Calle San Lázaro'],
      'Santiago de Cuba': ['Calle Heredia', 'Avenida Victoriano Garzón', 'Calle Aguilera'],
      'Villa Clara': ['Boulevard', 'Calle Independencia', 'Parque Vidal'],
      'Pinar del Río': ['Calle Martí', 'Avenida Rafael Ferro', 'Calle Colón'],
      'Las Tunas': ['Calle Juventud', 'Avenida Camilo Cienfuegos', 'Calle Vicente García'],
    };

    const streets = streetsByProvince[province] || [
      'Calle Principal',
      'Avenida Central',
      'Calle Mayor',
    ];
    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    const streetNumber = Math.floor(Math.random() * 500) + 1;

    // Historia institucional variada por tipo de objeto
    const institutionalHistory: Record<string, string> = {
      painting: `Taller de pintura colonial establecido en ${municipality} durante el siglo XVIII. 
        Los artistas trabajaban bajo el patronazgo de la iglesia y familias adineradas locales. 
        La escuela pictórica de ${province} desarrolló características propias que la distinguen.`,

      sculpture: `Atelier de escultura contemporánea fundado en ${municipality} en la década de 1960. 
        Formó parte del movimiento de renovación artística cubana post-revolucionaria. 
        Los artistas de ${province} contribuyeron significativamente al arte público nacional.`,

      photograph: `Estudio fotográfico activo en ${municipality} desde principios del siglo XX. 
        Documentó importantes eventos históricos y sociales de ${province}. 
        Su archivo constituye una memoria visual invaluable de la región.`,

      manuscript: `Centro de escritura y documentación establecido en ${municipality}. 
        Importante para la preservación del patrimonio literario de ${province}. 
        Varios escritores reconocidos desarrollaron su obra en esta región.`,
    };

    const objectHistory: Record<string, string> = {
      painting: `La obra ingresó a la colección en 2019 como parte de una donación familiar. 
        Había permanecido en manos privadas en ${municipality} durante más de un siglo. 
        Su descubrimiento enriqueció el conocimiento sobre el arte colonial de ${province}.`,

      sculpture: `Adquirida directamente del taller del artista en ${municipality} en 2020. 
        Forma parte de una serie creada específicamente para representar la identidad cultural de ${province}. 
        Su incorporación al museo refuerza la colección de arte contemporáneo regional.`,

      photograph: `Rescatada de un archivo familiar en ${municipality} en 2021. 
        Constituye un testimonio único de la vida social en ${province} durante el siglo XX. 
        Su conservación era crítica debido a las condiciones de almacenamiento previas.`,
    };

    return {
      producerAuthorNames: {
        value: `${randomArtist}, Artistas de ${municipality}`,
        status: { status: 'To Review' },
        comment: `Autores relacionados con ${template.type} de ${province}`,
        modifiedBy: user.uuid,
        history: [],
      },
      street: {
        value: randomStreet,
        status: { status: 'To Review' },
        comment: `Dirección principal en ${municipality}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      number: {
        value: streetNumber.toString(),
        status: { status: 'To Review' },
        comment: 'Número de la dirección',
        modifiedBy: user?.uuid,
        history: [],
      },
      betweenStreet1: {
        value: `Entre ${streets[(streets.indexOf(randomStreet) + 1) % streets.length]}`,
        status: { status: 'To Review' },
        comment: 'Referencias de ubicación',
        modifiedBy: user?.uuid,
        history: [],
      },
      betweenStreet2: {
        value: `y ${streets[(streets.indexOf(randomStreet) + 2) % streets.length]}`,
        status: { status: 'To Review' },
        comment: 'Segunda referencia de ubicación',
        modifiedBy: user?.uuid,
        history: [],
      },
      district: {
        value: `Distrito Central de ${municipality}`,
        status: { status: 'To Review' },
        comment: 'Distrito administrativo',
        modifiedBy: user?.uuid,
        history: [],
      },
      locality: {
        value: municipality,
        status: { status: 'To Review' },
        comment: 'Localidad específica',
        modifiedBy: user?.uuid,
        history: [],
      },
      municipality: {
        value: municipality,
        status: { status: 'To Review' },
        comment: 'Municipio de referencia',
        modifiedBy: user?.uuid,
        history: [],
      },
      province: {
        value: province,
        status: { status: 'To Review' },
        comment: 'Provincia de Cuba',
        modifiedBy: user?.uuid,
        history: [],
      },
      institutionalHistory: {
        value:
          institutionalHistory[template.type] ||
          `Institución cultural en ${municipality}, ${province}, importante para el desarrollo artístico regional.`,
        status: { status: 'To Review' },
        comment: `Historia institucional del ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
      objectEntryHistory: {
        value:
          objectHistory[template.type] ||
          `Objeto ingresado al museo desde ${municipality}, ${province}, enriqueciendo la colección regional.`,
        status: { status: 'To Review' },
        comment: `Historia de ingreso del ${template.type}`,
        modifiedBy: user?.uuid,
        history: [],
      },
    };
  }

  /**
   * Genera token de autenticación mock
   */
  private generateMockToken(user: User): string {
    return `mock_token_for_${user.uuid}_${Date.now()}`;
  }

  /**
   * Finaliza el reporte y lo guarda
   */
  private async finalizeReport(): Promise<void> {
    this.creationReport.endTime = new Date();
    const durationMs =
      this.creationReport.endTime.getTime() - this.creationReport.startTime.getTime();
    this.creationReport.duration = `${Math.round(durationMs / 1000)}s`;
    this.creationReport.successRate = `${((this.creationReport.successful / this.creationReport.totalRequested) * 100).toFixed(2)}%`;

    if (durationMs > 0) {
      this.creationReport.objectsPerSecond = Math.round(
        (this.creationReport.totalCreated / durationMs) * 1000,
      );
    }

    // Mostrar reporte final
    this.logger.log('📊 REPORTE FINAL DE CREACIÓN');
    this.logger.log('================================');
    this.logger.log(`⏱️  Duración: ${this.creationReport.duration}`);
    this.logger.log(`📦 Total solicitado: ${this.creationReport.totalRequested}`);
    this.logger.log(`✅ Exitosos: ${this.creationReport.successful}`);
    this.logger.log(`❌ Fallidos: ${this.creationReport.failed}`);
    this.logger.log(`📈 Tasa de éxito: ${this.creationReport.successRate}`);
    this.logger.log(`⚡ Objetos/segundo: ${this.creationReport.objectsPerSecond}`);

    if (this.creationReport.errors.length > 0) {
      this.logger.log(`🔥 Errores (${this.creationReport.errors.length}):`);
      this.creationReport.errors.slice(0, 5).forEach((error, index) => {
        this.logger.log(`   ${index + 1}. ${error}`);
      });
      if (this.creationReport.errors.length > 5) {
        this.logger.log(`   ... y ${this.creationReport.errors.length - 5} errores más`);
      }
    }

    // Guardar reporte en archivo
    await this.saveReportToFile();
  }

  /**
   * Guarda el reporte en un archivo JSON
   */
  private async saveReportToFile(): Promise<void> {
    try {
      const reportsDir = path.join(process.cwd(), 'reports');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `cultural-objects-creation-${timestamp}.json`;
      const filepath = path.join(reportsDir, filename);

      // Crear directorio si no existe
      try {
        await fs.access(reportsDir);
      } catch {
        await fs.mkdir(reportsDir, { recursive: true });
      }

      await fs.writeFile(filepath, JSON.stringify(this.creationReport, null, 2), 'utf8');
      this.logger.log(`💾 Reporte guardado en: ${filepath}`);
    } catch (error) {
      this.logger.warn(`⚠️ No se pudo guardar el reporte: ${error.message}`);
    }
  }

  /**
   * Función de utilidad para pausas
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Opciones del comando
  @Option({
    flags: '-t, --totalObjects <number>',
    description: 'Total de objetos culturales a crear (default: 50)',
  })
  parseTotalObjects(val: string): number {
    return parseInt(val) || 50;
  }

  @Option({
    flags: '-b, --batchSize <number>',
    description: 'Tamaño de cada lote de procesamiento (default: 10)',
  })
  parseBatchSize(val: string): number {
    return parseInt(val) || 10;
  }

  @Option({
    flags: '--type <type>',
    description: 'Tipo específico de objeto (painting, sculpture, photograph, etc.) o "all"',
  })
  parseObjectType(val: string): string {
    return val || 'all';
  }

  @Option({
    flags: '-p, --province <province>',
    description: 'Provincia específica de Cuba',
  })
  parseProvince(val: string): CubaProvinces {
    return val as CubaProvinces;
  }

  @Option({
    flags: '-d, --delay <ms>',
    description: 'Retraso entre lotes en milisegundos (default: 1000)',
  })
  parseDelay(val: string): number {
    return parseInt(val) || 1000;
  }
}
