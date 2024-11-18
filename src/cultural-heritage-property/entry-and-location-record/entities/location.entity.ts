import {LocationModel} from "../models/entry-and-location-record.model";

export class LocationEntity implements  LocationModel{
    box: string;
    exhibitionRoom: string;
    fileFolder: string;
    floor: string;
    shelfDrawer: string;
    showcaseShelf: string;
    storage: string;


    constructor(option: LocationModel) {
        this.box = option.box;
        this.exhibitionRoom = option.exhibitionRoom;
        this.fileFolder = option.fileFolder;
        this.floor = option.floor;
        this.shelfDrawer = option.shelfDrawer;
        this.showcaseShelf = option.showcaseShelf;
        this.storage = option.storage;
    }

    static create(option: LocationModel): LocationEntity {
        return new LocationEntity(option);
    }
}
