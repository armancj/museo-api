import {PickType} from "@nestjs/swagger";
import {CreateUserDto} from "./create-user.dto";
import {IsBoolean, IsOptional} from "class-validator";

export class FilterUserDto extends PickType(CreateUserDto, ['roles', "email", "nationality", "province", "mobile", 'municipal'] as const){
    @IsBoolean()
    @IsOptional()
    active?: boolean;
}