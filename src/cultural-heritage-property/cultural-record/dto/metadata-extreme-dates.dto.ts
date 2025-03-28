import {FieldMetadata, StatusObject} from "../../field-review-status/models/field-review-status.model";
import {ExtremeDatesDto} from "./extreme-dates.dto";
import {IsIn, IsNotEmpty, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";

export class MetadataExtremeDatesDto implements  Omit<FieldMetadata<ExtremeDatesDto>, 'modifiedBy' | 'history'>{
    @IsString()
    @IsNotEmpty()
    comment: string;

    @IsOptional()
    @IsNotEmpty()
    @IsOptional()
    @IsIn(['Pending' , 'To Review' ,'Reviewed' ,'Has Issue'])
    status: StatusObject;

    @Type(() => ExtremeDatesDto)
    @ValidateNested()
    value: ExtremeDatesDto;
}