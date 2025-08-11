import { Command, CommandRunner, Option } from 'nest-commander';
import { UsersService } from '../../users/users.service';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { UserRoles } from '../../users/enum/user-roles.enum';
import { Logger } from '@nestjs/common';
import { User } from '../../users/entities/user.entity';

const defaultUserData: CreateUserDto = {
  address: 'SuperAdmin Address',
  email: 'root@gmail.com',
  lastName: 'Root',
  mobile: '(+99) 99-99-99-99',
  name: 'Root',
  password: 'secret',
  municipal: 'Las Tunas',
  province: 'Las Tunas',
  nationality: 'Cuba',
  roles: UserRoles.superAdmin,
};

@Command({
  name: 'create:default-user',
  description: 'Insert Super Admin data in bd',
})
export class CreateSuperAdmin extends CommandRunner {
  private readonly logger = new Logger(`create:default-user`);

  constructor(private readonly userService: UsersService) {
    super();
  }

  @Option({
    flags: '-a, --address <address>',
    description: 'User address',
  })
  parseAddress(val: string): string {
    return val;
  }

  @Option({
    flags: '-e, --email <email>',
    description: 'User email',
  })
  parseEmail(val: string): string {
    return val;
  }

  @Option({
    flags: '-l, --lastName <lastName>',
    description: 'User last name',
  })
  parseLastName(val: string): string {
    return val;
  }

  @Option({
    flags: '-m, --mobile <mobile>',
    description: 'User mobile number',
  })
  parseMobile(val: string): string {
    return val;
  }

  @Option({
    flags: '-n, --name <name>',
    description: 'User name',
  })
  parseName(val: string): string {
    return val;
  }

  @Option({
    flags: '-p, --password <password>',
    description: 'User password',
  })
  parsePassword(val: string): string {
    return val;
  }

  @Option({
    flags: '-p, --municipal <municipal>',
    description: 'User municipal',
  })
  parseMunicipal(val: string): string {
    return val;
  }

  @Option({
    flags: '-p, --province <province>',
    description: 'User province',
  })
  parseProvince(val: string): string {
    return val;
  }

  @Option({
    flags: '-p, --nationality <nationality>',
    description: 'User nationality',
  })
  parseNationality(val: string): string {
    return val;
  }

  async run(passedParam: string[], options?: Record<string, any>): Promise<void> {
    const createUserDto: CreateUserDto = { ...defaultUserData, ...options };
    await this.userService.create(createUserDto, {} as User).catch(err => {
      this.logger.error(err);
      throw new Error(err);
    });
    this.logger.log(
      `Creating super admin with data: ${createUserDto.email} and password: ${createUserDto.password}.`,
    );
  }
}
