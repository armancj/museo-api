import {EntryAndLocationRecordModel} from "../models/entry-and-location-record.model";
import {GenericClassification, HeritageType} from "../enum/entry-and-location-record.enum";
import {InstitutionType} from "../../../address/institutions/enum/institutions.enum";
import {LocationEntity} from "./location.entity";

export class EntryAndLocationRecord implements EntryAndLocationRecordModel {
    auxiliaryInventory: boolean;
    declarationType: string;
    entryDate: Date;
    entryMethod: string;
    genericClassification: GenericClassification;
    heritageType: HeritageType;
    initialDescription: string;
    institutionType: InstitutionType;
    inventoryNumber: string;
    objectLocation: LocationEntity;
    objectName: string;
    pieceInventory: boolean;


    constructor(option: Partial<EntryAndLocationRecordModel>) {
        this.auxiliaryInventory = option.auxiliaryInventory;
        this.declarationType = option.declarationType;
        this.entryDate = option.entryDate;
        this.entryMethod = option.entryMethod;
        this.genericClassification = option.genericClassification;
        this.heritageType = option.heritageType;
        this.initialDescription = option.initialDescription;
        this.institutionType = option.institutionType;
        this.inventoryNumber = option.inventoryNumber;
        this.pieceInventory = option.pieceInventory;
        this.objectName = option.objectName;
        if(option.objectLocation)
        this.objectLocation = LocationEntity.create(option.objectLocation);
    }

    static create(option: EntryAndLocationRecordModel): EntryAndLocationRecord {
        return new EntryAndLocationRecord(option);
    }
}
