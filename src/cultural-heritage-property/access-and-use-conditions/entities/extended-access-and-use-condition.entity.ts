import {AccessAndUseCondition} from "./access-and-use-condition.entity";
import {AccessAndUseConditionsModel} from "../models/access-and-use-conditions";


export class ExtendedAccessAndUseConditionEntity extends AccessAndUseCondition {
    uuid: string;

    constructor(option: Partial<AccessAndUseConditionsModel & {uuid: string}>) {
        super(option);
    }
    static create(option: Partial<AccessAndUseConditionsModel & {uuid: string}>): ExtendedAccessAndUseConditionEntity {
        return new ExtendedAccessAndUseConditionEntity(option);
    }
}
