import {
    UploadedFile,
    UserModel,
    UserPropertiesModel,
} from '../models/user.model';
import {Expose} from 'class-transformer';
import {UserRoles} from '../enum/user-roles.enum';
import {Institution} from "../../address/institutions/entities/institution.entity";

export class User implements UserModel {
    @Expose()
    uuid: string;

    @Expose()
    mobile: string;

    @Expose()
    municipal: string;

    @Expose()
    readonly email: string;

    @Expose()
    readonly address?: string;

    @Expose()
    readonly lastName: string;

    @Expose()
    readonly name: string;

    @Expose()
    readonly nationality?: string;

    @Expose()
    readonly province?: string;

    @Expose()
    readonly avatar?: UploadedFile;

    @Expose()
    readonly roles?: UserRoles;

    readonly passwordHashed: string;

    @Expose()
    readonly active?: boolean;

    @Expose()
    readonly deleted?: boolean;


    institutionId?: string;


    @Expose()
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
