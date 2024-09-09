import {PartialType, OmitType} from "@nestjs/swagger";
import {CreateUserDto} from "./create-user.dto";
import {IsBoolean, IsOptional} from "class-validator";

export class FilterUserDto extends PartialType(OmitType(CreateUserDto, ['password'] as const)){
    @IsBoolean()
    @IsOptional()
    active?: boolean;
}