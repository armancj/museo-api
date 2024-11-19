import {User} from "../../users/entities/user.entity";
import {UserModel} from "../../users/models/user.model";
import {UserRoles} from "../../users/enum/user-roles.enum";
import {InstitutionModel} from "../../address/institutions/entities/institution.model";
import {JwtPayload} from "../../auth/strategies/jwt.payload";

export function getFieldOfUserData(user: User, rest: Partial<UserModel>) {
    if (user?.roles === UserRoles.administrator) {
        rest.nationality = user.nationality;
        rest.province = user.province;
    }

    if (user?.roles === UserRoles.manager) {
        rest.nationality = user.nationality;
        rest.province = user.province;
        rest.municipal = user.municipal;
    }
}

export function getFieldOfInstitutionData(user: JwtPayload, rest: Partial<InstitutionModel>) {
    if (user?.roles === UserRoles.administrator) {
        rest.country = user.nationality;
        rest.province = user.province;
    }

    if (user?.roles === UserRoles.manager || user?.roles ===UserRoles.employee) {
        rest.country = user.nationality;
        rest.province = user.province;
        rest.municipality = user.municipal;
    }
}
