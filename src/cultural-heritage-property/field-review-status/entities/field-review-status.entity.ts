import {FieldReviewStatusModel} from "../models/field-review-status.model";

export class FieldReviewStatus implements FieldReviewStatusModel {
    comment: string;
    isApproved: boolean;
    isUnderReview: boolean;
    modifiedBy: string;
    currentValue: any;
    previousValue: any;
    reviewDate: Date;
    reviewedBy: string;
    createdAt: Date;
    deleted: boolean;
    updatedAt: Date;
    uuid: string;
}
