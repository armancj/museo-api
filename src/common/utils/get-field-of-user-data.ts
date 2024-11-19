import {User} from "../../users/entities/user.entity";
import {UserModel} from "../../users/models/user.model";
import {UserRoles} from "../../users/enum/user-roles.enum";

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
