import { OmitType } from '@nestjs/swagger';
import { UpdateUserDto } from "../../users/dto/update-user.dto";


export class EditProfileDto extends OmitType(UpdateUserDto, [

] as const) {}
