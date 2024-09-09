import {UserModel} from "../models/user.model";
import {PickType} from "@nestjs/swagger";
import {CreateUserDto} from "./create-user.dto";

export class FilterUserDto extends PickType(CreateUserDto, ['active', 'roles', "email", "nationality", "province", "mobile", 'municipal'] as const){

}