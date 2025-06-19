import { Command, CommandRunner } from 'nest-commander';
import { UsersService } from '../../users/users.service';
import { UserRoles } from '../../users/enum/user-roles.enum';
import { Logger } from '@nestjs/common';
import { InstitutionsService } from '../../address/institutions/institutions.service';
import { Classification } from '../../address/institutions/enum/institutions.enum';
import { JwtPayload } from '../../auth/strategies/jwt.payload';
import { TestDataFactory } from './factories/test-data.factory';
import { CUBA_DATA, CubaProvinces } from './util/const';

@Command({
  name: 'create:test-users',
  description: 'Create test users with different roles and their associated institutions',
})
export class CreateTestUsers extends CommandRunner {
  private logger = new Logger(CreateTestUsers.name);
  private mock = { roles: UserRoles.superAdmin } as JwtPayload;

  constructor(
    private userService: UsersService,
    private institutionService: InstitutionsService,
  ) {
    super();
  }

  async run() {
    this.logger.log('Creando datos...');

    await Promise.all([
      this.safe(() =>
        this.institutionService.create(
          TestDataFactory.institution(
            'Nacional',
            'nacional@test.com',
            'La Habana',
            'Plaza de la Revolución',
            Classification.NATIONAL,
          ),
          this.mock,
        ),
      ),
      ...Object.entries(CUBA_DATA).map(([province, municipalities]) =>
        this.processProvince(province as CubaProvinces, municipalities),
      ),
    ]);

    this.logger.log('¡Listo!');
  }

  private async processProvince(province: CubaProvinces, municipalities: readonly string[]) {
    await Promise.all([
      this.safe(() =>
        this.institutionService.create(
          TestDataFactory.institution(
            `Prov-${province}`,
            `${province.toLowerCase()}@test.com`,
            province,
            municipalities[0],
            Classification.PROVINCIAL,
          ),
          this.mock,
        ),
      ),
      this.safe(() =>
        this.userService.create(
          TestDataFactory.user(
            `Admin-${province}`,
            `admin.${province.toLowerCase().replace(/\s/g, '.')}@test.com`,
            province,
            municipalities[0],
            UserRoles.administrator,
          ),
        ),
      ),
      ...municipalities.map(municipality => this.processMunicipality(province, municipality)),
    ]);
  }

  private async processMunicipality(province: string, municipality: string) {
    const inst = await this.safe(() =>
      this.institutionService.create(
        TestDataFactory.institution(
          `Muni-${municipality}`,
          `${municipality.toLowerCase().replace(/\s/g, '.')}@test.com`,
          province,
          municipality,
          Classification.MUNICIPAL,
        ),
        this.mock,
      ),
    );

    if (!inst?.uuid) return;

    await Promise.all([
      this.safe(() =>
        this.userService.create(
          TestDataFactory.user(
            `Esp-${municipality}`,
            `esp.${municipality.toLowerCase().replace(/\s/g, '.')}@test.com`,
            province,
            municipality,
            UserRoles.manager,
            inst.uuid,
          ),
        ),
      ),
      ...[1, 2, 3].map(i =>
        this.safe(() =>
          this.userService.create(
            TestDataFactory.user(
              `Tec${i}-${municipality}`,
              `tec${i}.${municipality.toLowerCase().replace(/\s/g, '.')}@test.com`,
              province,
              municipality,
              UserRoles.employee,
              inst.uuid,
            ),
          ),
        ),
      ),
    ]);
  }

  private async safe<T>(fn: () => Promise<T>): Promise<T | null> {
    try {
      return await fn();
    } catch (e) {
      return e.message.includes('duplicate') ? null : Promise.reject(e);
    }
  }
}
