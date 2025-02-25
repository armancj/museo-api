import {BaseModel} from "../../../common/interfaces/base.model";
import {NonFunctionProperties} from "../../../common/interfaces/manipulate-properties";

export interface FieldReviewStatusModel extends BaseModel {
    isUnderReview: boolean;
    isApproved: boolean;
    reviewedBy: string;
    reviewDate: Date;
    currentValue: any;
    previousValue: any;
    modifiedBy: string;
    comment: string;
}
type OmitReviewStatusModel = Omit<FieldReviewStatusModel, 'uuid' | 'updatedAt' | 'createdAt' | 'deleted'>

export type FieldReviewPropertiesModel =
    NonFunctionProperties<OmitReviewStatusModel>;