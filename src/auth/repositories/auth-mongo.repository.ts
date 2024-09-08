import { InjectModel } from '@nestjs/mongoose';
import { AuthMongoModel, AuthNameEntity } from "../schema/auth.schema";

export class AuthMongoRepository  {
  constructor(
    @InjectModel(AuthNameEntity)
    private readonly authMongoModel: AuthMongoModel,
  ) {}

}
