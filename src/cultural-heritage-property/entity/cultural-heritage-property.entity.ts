import {CulturalPropertyModel} from "../models/cultural-property.model";
import {ProducerAuthorRecordModel} from "../producer-author-record/models/producer-author-record.models";
import {Expose, plainToClass} from "class-transformer";

export class CulturalHeritageProperty implements CulturalPropertyModel {
    @Expose()
    createdAt: Date;

    @Expose()
    deleted: boolean;

    @Expose()
    producerAuthor: ProducerAuthorRecordModel;

    @Expose()
    updatedAt: Date;

    @Expose()
    uuid: string;

    constructor(option: CulturalPropertyModel) {
        Object.assign(this as CulturalPropertyModel, option);
    }

    static create(option: CulturalPropertyModel): CulturalHeritageProperty {
        return plainToClass(CulturalHeritageProperty, option, { excludeExtraneousValues: true });
    }
}
