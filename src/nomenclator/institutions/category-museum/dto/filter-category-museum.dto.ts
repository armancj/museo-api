import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { UpdateCategoryMuseumDto } from "./update-category-museum.dto";

export class FilterCategoryMuseumDto extends UpdateCategoryMuseumDto{
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    instituionUUID?:string
}