import {BaseModel} from "../../../common/interfaces/base.model";

export interface FieldReviewStatusModel extends BaseModel {
    isUnderReview: boolean;
    isApproved: boolean;
    reviewedBy: string;
    reviewDate: Date;
    previousValue: any;
    modifiedBy: string;
    comment: string;
}
