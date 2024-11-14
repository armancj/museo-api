import {AccessAndUseConditionsModel} from "../models/access-and-use-conditions";

export class AccessAndUseCondition implements  AccessAndUseConditionsModel{

    accessConditions: string[];

    reproductionConditions: string[];

    technicalRequirements: string;
    
    constructor(option: Partial<AccessAndUseConditionsModel>) {
        this.accessConditions = option.accessConditions;
        this.reproductionConditions = option.reproductionConditions;
        this.technicalRequirements = option.technicalRequirements;
    }

    static create(option: AccessAndUseConditionsModel): AccessAndUseCondition {
        return new AccessAndUseCondition(option);
    }

}
