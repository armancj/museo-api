import {FieldReviewPropertiesModel} from "../models/field-review-status.model";

export class CreateFieldReviewStatusDto implements FieldReviewPropertiesModel {
    comment: string;
    currentValue: any;
    isApproved: boolean;
    isUnderReview: boolean;
    modifiedBy: string;
    previousValue: any;
    reviewDate: Date;
    reviewedBy: string;
}
