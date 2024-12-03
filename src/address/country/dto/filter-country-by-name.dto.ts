import {IsNotEmpty, IsOptional, IsString} from "class-validator";
import {CountryModel} from "../entities/country.model";

export class FilterCountryByNameDto implements Partial<CountryModel>{
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name: string;

}
