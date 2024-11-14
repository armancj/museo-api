import {CulturalPropertyModel} from "../models/cultural-property.model";
import {ProducerAuthorRecord} from "../../producer-author-record/entities/producer-author-record.entity";
import {AccessAndUseConditionsModel} from "../../access-and-use-conditions/models/access-and-use-conditions";
import {AccessAndUseCondition} from "../../access-and-use-conditions/entities/access-and-use-condition.entity";

export class CulturalHeritageProperty implements CulturalPropertyModel {
    createdAt: Date;

    deleted: boolean;

    producerAuthor: ProducerAuthorRecord;
    accessAndUseConditions: AccessAndUseConditionsModel;


    updatedAt: Date;

    uuid: string;

    constructor(option: CulturalPropertyModel) {
        this.createdAt = option.createdAt
        this.deleted = option.deleted
        this.updatedAt = option.updatedAt
        this.uuid = option.uuid

        if (option.producerAuthor)
            this.producerAuthor = ProducerAuthorRecord.create(option.producerAuthor)

        if (option.accessAndUseConditions)
            this.accessAndUseConditions = AccessAndUseCondition.create(option.accessAndUseConditions);
    }

    static create(option: CulturalPropertyModel): CulturalHeritageProperty {
        return new CulturalHeritageProperty(option);
    }
}
