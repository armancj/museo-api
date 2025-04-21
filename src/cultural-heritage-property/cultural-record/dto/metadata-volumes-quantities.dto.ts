import {FieldMetadata, StatusObject} from "../../field-review-status/models/field-review-status.model";
import {IsIn, IsNotEmpty, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {VolumesQuantitiesDto} from "./volumes-quantities.dto";

export class MetadataVolumesQuantitiesDto implements  Omit<FieldMetadata<VolumesQuantitiesDto>, 'modifiedBy' | 'history'>{
    @IsString()
    @IsNotEmpty()
    comment: string;

    @IsOptional()
    @IsNotEmpty()
    @IsOptional()
    @IsIn(['Pending' , 'To Review' ,'Reviewed' ,'Has Issue'])
    status: StatusObject;

    @Type(() => VolumesQuantitiesDto)
    @ValidateNested()
    value: VolumesQuantitiesDto;
}