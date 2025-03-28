import {FieldMetadata, StatusObject} from "../../field-review-status/models/field-review-status.model";
import {IsIn, IsNotEmpty, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {DimensionsDto} from "./dimensions.dto";

export class MetadataDimensionsDto implements  Omit<FieldMetadata<DimensionsDto>, 'modifiedBy' | 'history'>{
    @IsString()
    @IsNotEmpty()
    comment: string;

    @IsOptional()
    @IsNotEmpty()
    @IsOptional()
    @IsIn(['Pending' , 'To Review' ,'Reviewed' ,'Has Issue'])
    status: StatusObject;

    @Type(() => DimensionsDto)
    @ValidateNested()
    value: DimensionsDto;
}