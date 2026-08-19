import {
    UploadedFile,
    UserModel,
    UserPropertiesModel,
} from '../models/user.model';
import {Exclude} from 'class-transformer';
import {UserRoles} from '../enum/user-roles.enum';
import {Institution} from "../../address/institutions/entities/institution.entity";

export class User implements UserModel {
    uuid: string;

    mobile: string;

    municipal: string;

    readonly email: string;

    readonly address?: string;

    readonly lastName: string;

    readonly name: string;

    readonly nationality?: string;

    readonly province?: string;

    readonly avatar?: UploadedFile;

    readonly roles?: UserRoles;

    @Exclude()
    readonly passwordHashed: string;

    readonly active?: boolean;

    @Exclude()
    readonly deleted?: boolean;

    institutionId?: string;

    institution?: Institution


    constructor(option: UserPropertiesModel) {
        this.uuid = option.uuid;
        this.mobile = option.mobile;
        this.email = option.email;
        this.address = option.address;
        this.lastName = option.lastName;
        this.name = option.name;
        this.avatar = option.avatar;
        this.roles = option.roles;
        this.passwordHashed = option.passwordHashed;
        this.active = option.active;
        this.deleted = option.deleted;

        if (option?.nationality)
            this.nationality = option.nationality;

        if (option?.province)
            this.province = option.province;

        if (option?.municipal)
            this.municipal = option.municipal;

        if (option?.institution)
            this.institution = Institution.create(option?.institution);
    }

    updateUserInfo(updatedInfo: Partial<UserPropertiesModel>): void {
        Object.assign(this as UserModel, updatedInfo);
    }

    isActive(): boolean {
        return this.active ?? false;
    }

    isDeleted(): boolean {
        return this.deleted ?? false;
    }

    static create(options: UserPropertiesModel): User {
        return new User(options);
    }
}
