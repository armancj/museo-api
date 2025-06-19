import { Command, CommandRunner } from 'nest-commander';
import { UsersService } from '../../users/users.service';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { UserRoles } from '../../users/enum/user-roles.enum';
import { Logger } from '@nestjs/common';
import { InstitutionsService } from '../../address/institutions/institutions.service';
import { CreateInstitutionDto } from '../../address/institutions/dto/create-institution.dto';
import { InstitutionType, Classification } from '../../address/institutions/enum/institutions.enum';
import { JwtPayload } from '../../auth/strategies/jwt.payload';

// Tipo para el mapeo de municipios por provincia
type MunicipalitiesByProvince = {
  'La Habana': string[];
  'Santiago de Cuba': string[];
  'Villa Clara': string[];
  'Pinar del Río': string[];
  'Las Tunas': string[];
};

@Command({
  name: 'create:test-users',
  description: 'Create test users with different roles and their associated institutions',
})
export class CreateTestUsers extends CommandRunner {
  private readonly logger = new Logger(CreateTestUsers.name);
  private usedPhoneNumbers = new Set<string>();
  private usedInstitutionNames = new Set<string>();

  // Datos de muestra para provincias y municipios en Cuba
  private readonly provinces: (keyof MunicipalitiesByProvince)[] = [
    'La Habana',
    'Santiago de Cuba',
    'Villa Clara',
    'Pinar del Río',
    'Las Tunas',
  ];

  private readonly municipalitiesByProvince: MunicipalitiesByProvince = {
    'La Habana': ['Plaza de la Revolución', 'Centro Habana', 'La Habana Vieja', 'Playa'],
    'Santiago de Cuba': ['Santiago de Cuba', 'Palma Soriano', 'Contramaestre'],
    'Villa Clara': ['Santa Clara', 'Remedios', 'Sagua la Grande', 'Placetas', 'Manicaragua'],
    'Pinar del Río': ['Pinar del Río', 'Viñales', 'San Luis', 'Sandino', 'Consolación del Sur'],
    'Las Tunas': [
      'Las Tunas',
      'Puerto Padre',
      'Jesús Menéndez',
      'Majibacoa',
      'Jobabo',
      'Colombia',
      'Amancio',
      'Manatí',
    ],
  };

  constructor(
    private readonly userService: UsersService,
    private readonly institutionService: InstitutionsService,
  ) {
    super();
  }

  async run(): Promise<void> {
    this.logger.log('Iniciando creación de usuarios de prueba e instituciones...');

    try {
      // Crear una institución nacional
      const nationalInstitution = await this.createNationalInstitution();
      if (nationalInstitution) {
        this.logger.log(
          `Institución nacional creada: ${nationalInstitution.name} con UUID: ${nationalInstitution.uuid}`,
        );
      }

      // Crear instituciones y usuarios para cada provincia
      for (const province of this.provinces) {
        // Crear una institución provincial
        const provincialInstitution = await this.createProvincialInstitution(province);
        if (provincialInstitution) {
          this.logger.log(
            `Institución provincial creada: ${provincialInstitution.name} con UUID: ${provincialInstitution.uuid}`,
          );
        }

        // Crear un usuario administrador para la provincia
        await this.createAdminUser(province);

        // Crear instituciones y usuarios para cada municipio en la provincia
        const municipalities = this.municipalitiesByProvince[province];
        for (const municipality of municipalities) {
          // Crear una institución municipal
          const municipalInstitution = await this.createMunicipalInstitution(
            province,
            municipality,
          );
          if (municipalInstitution) {
            this.logger.log(
              `Institución municipal creada: ${municipalInstitution.name} con UUID: ${municipalInstitution.uuid}`,
            );

            // Crear un usuario especialista para el municipio
            await this.createSpecialistUser(province, municipality, municipalInstitution.uuid);

            // Crear múltiples usuarios técnicos para el municipio
            for (let i = 1; i <= 3; i++) {
              await this.createTechnicianUser(province, municipality, municipalInstitution.uuid, i);
            }
          }
        }
      }

      this.logger.log('¡Proceso de creación de usuarios de prueba e instituciones completado!');
    } catch (error) {
      this.logger.error(`Error creando usuarios de prueba: ${(error as Error).message}`);
      throw error;
    }
  }

  /**
   * Genera un número de teléfono único aleatorio en formato cubano
   */
  private generateUniquePhoneNumber(): string {
    let phoneNumber: string;
    let attempts = 0;
    const maxAttempts = 1000;

    do {
      // Generar número aleatorio de 8 dígitos después del código de país
      const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
      phoneNumber = `(+53) ${randomNumber.toString().substring(0, 2)}-${randomNumber.toString().substring(2, 5)}-${randomNumber.toString().substring(5, 8)}`;
      attempts++;

      if (attempts >= maxAttempts) {
        throw new Error(
          'No se pudo generar un número de teléfono único después de múltiples intentos',
        );
      }
    } while (this.usedPhoneNumbers.has(phoneNumber));

    this.usedPhoneNumbers.add(phoneNumber);
    return phoneNumber;
  }

  /**
   * Genera un nombre único para la institución agregando un sufijo si es necesario
   */
  private generateUniqueInstitutionName(baseName: string): string {
    let institutionName = baseName;
    let counter = 1;

    while (this.usedInstitutionNames.has(institutionName)) {
      institutionName = `${baseName} ${counter}`;
      counter++;
    }

    this.usedInstitutionNames.add(institutionName);
    return institutionName;
  }

  /**
   * Intenta crear un usuario y maneja errores de duplicación
   */
  private async tryCreateUser(
    createUserDto: CreateUserDto,
    userType: string,
    location: string,
  ): Promise<any | null> {
    try {
      const user = await this.userService.create(createUserDto);
      this.logger.log(`Usuario ${userType} creado para ${location}: ${user.email}`);
      return user;
    } catch (error) {
      const errorMessage = (error as Error).message.toLowerCase();

      // Verificar si es un error de duplicación
      if (
        errorMessage.includes('duplicate') ||
        errorMessage.includes('duplicado') ||
        errorMessage.includes('unique') ||
        errorMessage.includes('already exists') ||
        errorMessage.includes('ya existe')
      ) {
        this.logger.warn(
          `Usuario ${userType} para ${location} ya existe, omitiendo: ${createUserDto.email}`,
        );
        return null;
      }

      // Si es otro tipo de error, lo lanzamos
      throw error;
    }
  }

  /**
   * Intenta crear una institución y maneja errores de duplicación
   */
  private async tryCreateInstitution(
    createInstitutionDto: CreateInstitutionDto,
    institutionType: string,
  ): Promise<any | null> {
    try {
      const superAdminMock: JwtPayload = {
        roles: UserRoles.superAdmin,
      } as JwtPayload;

      const institution = await this.institutionService.create(
        createInstitutionDto,
        superAdminMock,
      );
      return institution;
    } catch (error) {
      const errorMessage = (error as Error).message.toLowerCase();

      // Verificar si es un error de duplicación
      if (
        errorMessage.includes('duplicate') ||
        errorMessage.includes('duplicado') ||
        errorMessage.includes('unique') ||
        errorMessage.includes('already exists') ||
        errorMessage.includes('ya existe')
      ) {
        this.logger.warn(
          `Institución ${institutionType} ya existe, omitiendo: ${createInstitutionDto.name}`,
        );
        return null;
      }

      // Si es otro tipo de error, lo lanzamos
      throw error;
    }
  }

  private async createNationalInstitution() {
    const baseName = 'Institución Nacional de Museos';
    const uniqueName = this.generateUniqueInstitutionName(baseName);

    const createInstitutionDto: CreateInstitutionDto = {
      name: uniqueName,
      street: 'Calle Principal',
      number: '123',
      referenceCode: 'NAT-001',
      betweenStreet1: 'Calle A',
      betweenStreet2: 'Calle B',
      district: 'Distrito Central',
      locality: 'Centro',
      province: 'La Habana',
      municipality: 'Plaza de la Revolución',
      country: 'Cuba',
      phone1: this.generateUniquePhoneNumber(),
      email: 'institucion.nacional@ejemplo.com',
      institutionType: InstitutionType.MUSEUM,
      classification: Classification.NATIONAL,
    };

    return await this.tryCreateInstitution(createInstitutionDto, 'nacional');
  }

  private async createProvincialInstitution(province: keyof MunicipalitiesByProvince) {
    const baseName = `Museo Provincial de ${province}`;
    const uniqueName = this.generateUniqueInstitutionName(baseName);

    const createInstitutionDto: CreateInstitutionDto = {
      name: uniqueName,
      street: 'Avenida Principal',
      number: '456',
      referenceCode: `PROV-${province.substring(0, 3).toUpperCase()}`,
      betweenStreet1: 'Calle C',
      betweenStreet2: 'Calle D',
      district: 'Distrito Provincial',
      locality: 'Centro Provincial',
      province: province,
      municipality: this.municipalitiesByProvince[province][0], // Usar primer municipio
      country: 'Cuba',
      phone1: this.generateUniquePhoneNumber(),
      email: `museo.${province.toLowerCase().replace(/\s/g, '.')}@ejemplo.com`,
      institutionType: InstitutionType.MUSEUM,
      classification: Classification.PROVINCIAL,
    };

    return await this.tryCreateInstitution(createInstitutionDto, 'provincial');
  }

  private async createMunicipalInstitution(province: string, municipality: string) {
    const baseName = `Museo Municipal de ${municipality}`;
    const uniqueName = this.generateUniqueInstitutionName(baseName);

    const createInstitutionDto: CreateInstitutionDto = {
      name: uniqueName,
      street: 'Calle Municipal',
      number: '789',
      referenceCode: `MUN-${municipality.substring(0, 3).toUpperCase()}`,
      betweenStreet1: 'Calle E',
      betweenStreet2: 'Calle F',
      district: 'Distrito Municipal',
      locality: 'Centro Municipal',
      province: province,
      municipality: municipality,
      country: 'Cuba',
      phone1: this.generateUniquePhoneNumber(),
      email: `museo.${municipality.toLowerCase().replace(/\s/g, '.')}@ejemplo.com`,
      institutionType: InstitutionType.MUSEUM,
      classification: Classification.MUNICIPAL,
    };

    return await this.tryCreateInstitution(createInstitutionDto, 'municipal');
  }

  private async createAdminUser(province: string) {
    const createUserDto: CreateUserDto = {
      email: `admin.${province.toLowerCase().replace(/\s/g, '.')}@test.com`,
      mobile: this.generateUniquePhoneNumber(),
      password: '123',
      address: `Dirección Admin ${province}`,
      lastName: `Admin ${province}`,
      name: 'Admin',
      nationality: 'Cuba',
      province: province,
      roles: UserRoles.administrator,
    } as CreateUserDto;

    return await this.tryCreateUser(createUserDto, 'admin', province);
  }

  private async createSpecialistUser(
    province: string,
    municipality: string,
    institutionId: string,
  ) {
    const createUserDto: CreateUserDto = {
      email: `especialista.${municipality.toLowerCase().replace(/\s/g, '.')}@test.com`,
      mobile: this.generateUniquePhoneNumber(),
      password: '123',
      address: `Dirección Especialista ${municipality}`,
      lastName: `Especialista ${municipality}`,
      name: 'Especialista',
      nationality: 'Cuba',
      province: province,
      municipal: municipality,
      roles: UserRoles.manager,
      institutionId: institutionId,
    };

    return await this.tryCreateUser(createUserDto, 'especialista', municipality);
  }

  private async createTechnicianUser(
    province: string,
    municipality: string,
    institutionId: string,
    index: number,
  ) {
    const createUserDto: CreateUserDto = {
      email: `tecnico${index}.${municipality.toLowerCase().replace(/\s/g, '.')}@test.com`,
      mobile: this.generateUniquePhoneNumber(),
      password: '123',
      address: `Dirección Técnico ${index} ${municipality}`,
      lastName: `Técnico ${municipality}`,
      name: `Técnico ${index}`,
      nationality: 'Cuba',
      province: province,
      municipal: municipality,
      roles: UserRoles.employee,
      institutionId: institutionId,
    };

    return await this.tryCreateUser(createUserDto, `técnico ${index}`, municipality);
  }
}
