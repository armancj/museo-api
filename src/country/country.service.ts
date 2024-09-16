import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import {InjectModel} from "@nestjs/mongoose";
import {CountryMongoModel, CountryNameEntity} from "./schema/country.schema";
import {Country} from "./entities/country.entity";
import {Countries} from "./entities/countries.entity";
import {Province} from "../province/entities/province.entity";

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
    return Countries.create(countries);
  }

  async findOne(uuid: string) {
    const country = await this.countryDocumentModel
        .findOne({ uuid, deleted: false })
        .exec();

    if (!country) throw new NotFoundException('Not found country');

    return Country.create(country);
  }

  async update(uuid: string, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  async remove(uuid: string) {
    return `This action removes a #${id} country`;
  }
}
