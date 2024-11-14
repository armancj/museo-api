import {IsNotEmpty, IsString} from "class-validator";

export class CreateAccessAndUseConditionDto {
    @IsString({each: true})
    @IsNotEmpty({each: true})
    accessConditions: string[];

    @IsString({each: true})
    @IsNotEmpty({each: true})
    reproductionConditions: string[];

    @IsString()
    @IsNotEmpty()
    technicalRequirements: string;
}
