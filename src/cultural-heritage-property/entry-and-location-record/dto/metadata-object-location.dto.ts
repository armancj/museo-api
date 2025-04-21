import {FieldMetadata, StatusObject} from "../../field-review-status/models/field-review-status.model";
import {IsIn, IsNotEmpty, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {CreateLocationDto} from "./create-location.dto";

export class MetadataObjectLocationDto implements  Omit<FieldMetadata<CreateLocationDto>, 'modifiedBy' | 'history'>{
    @IsString()
    @IsNotEmpty()
    comment: string;

    @IsOptional()
    @IsNotEmpty()
    @IsOptional()
    @IsIn(['Pending' , 'To Review' ,'Reviewed' ,'Has Issue'])
    status: StatusObject;

    @Type(() => CreateLocationDto)
    @ValidateNested()
    value: CreateLocationDto;
}