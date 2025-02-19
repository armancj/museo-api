import { IsNotEmpty,  IsString } from "class-validator";

export class CreateCategoryMuseumDto {
    @IsString()
    @IsNotEmpty()
    name:string;
}
