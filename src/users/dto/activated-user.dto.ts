import {IsBoolean, IsOptional} from "class-validator";


export class ActivatedUserDto{
    @IsBoolean()
    active: boolean;
}
