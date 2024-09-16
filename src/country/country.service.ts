import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import {InjectModel} from "@nestjs/mongoose";
import {CountryMongoModel, CountryNameEntity} from "./schema/country.schema";
import {Country} from "./entities/country.entity";
import {Countries} from "./entities/countries.entity";

@Injectable()
export class CountryService {
  constructor(
      @InjectModel(CountryNameEntity) private countryDocumentModel: CountryMongoModel,
  ) {}
  async create(createCountryDto: CreateCountryDto) {
    const createdCountry = await this.countryDocumentModel.create(createCountryDto);
    return Country.create(createdCountry);
  }

  async findAll() {
    const countries = await this.countryDocumentModel.find({ deleted: false }).exec();
    return Countries.create(countries).value;
  }

  async findOne(uuid: string) {
    const country = await this.countryDocumentModel
        .findOne({ uuid, deleted: false })
        .exec();

    if (!country) throw new NotFoundException('Not found country');

    return Country.create(country);
  }

  async update(uuid: string, updateCountryDto: UpdateCountryDto) {
    await this.findOne(uuid);
    await this.countryDocumentModel.updateOne({ uuid }, updateCountryDto).exec();
  }

  async remove(uuid: string) {
    const country = await this.findOne(uuid)
    const name = `${country.name}-${country.uuid}`
    await this.countryDocumentModel.updateOne({ uuid, deleted: false }, { deleted: true, name }).exec();
  }
}
