import {CulturalPropertyModel} from "../models/cultural-property.model";
import {ProducerAuthorRecordModel} from "../producer-author-record/models/producer-author-record.models";
import {Expose, plainToClass} from "class-transformer";
import {ProducerAuthorRecord} from "../producer-author-record/entities/producer-author-record.entity";

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
        console.log({option})
        Object.assign(this as CulturalPropertyModel, option);

        this.producerAuthor = ProducerAuthorRecord.create(option.producerAuthor)
    }

    static create(option: CulturalPropertyModel): CulturalHeritageProperty {
        return plainToClass(CulturalHeritageProperty, option, { excludeExtraneousValues: true });
    }
}
