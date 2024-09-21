import {
  MunicipalityModel,
  MunicipalityPropertiesModel,
} from './municipality.model';
import { Expose, plainToClass } from 'class-transformer';
import { BaseEntity } from '../../../common/entity/base.entity';

export class Municipality extends BaseEntity implements MunicipalityModel {
  @Expose()
  name: string;

  @Expose()
  province: string;

  constructor(options: MunicipalityPropertiesModel) {
    super();
    Object.assign(this as BaseEntity, options);
  }

  static create(options: MunicipalityPropertiesModel): Municipality {
    return plainToClass(Municipality, options, {
      excludeExtraneousValues: true,
    });
  }
}
