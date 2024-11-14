import {CulturalPropertyModel} from "../models/cultural-property.model";
import {ProducerAuthorRecord} from "../producer-author-record/entities/producer-author-record.entity";

export class CulturalHeritageProperty implements CulturalPropertyModel {
    createdAt: Date;

    deleted: boolean;

    producerAuthor: ProducerAuthorRecord;

    updatedAt: Date;

    uuid: string;

    constructor(option: CulturalPropertyModel) {
        this.createdAt= option.createdAt
        this.deleted= option.deleted
        this.updatedAt= option.updatedAt
        this.uuid= option.uuid
        if(option.producerAuthor)
        this.producerAuthor = ProducerAuthorRecord.create(option.producerAuthor)
    }

    static create(option: CulturalPropertyModel): CulturalHeritageProperty {
        return new CulturalHeritageProperty(option);
    }
}
