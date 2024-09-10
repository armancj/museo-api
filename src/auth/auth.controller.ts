import {
  Controller,
  Inject, Post, UseGuards,
} from '@nestjs/common';
import {ApiBody, ApiTags} from '@nestjs/swagger';
import {Auth, CurrentUser,} from './decorator';
import { AuthService } from "./auth.service";
import {LocalAuthGuard} from "./guard/local-auth.guard";
import {LoginDto} from "./dto/login-dto";
import {User} from "../users/entities/user.entity";


@ApiTags(`Auth`)
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginDto })
  @Post('login')
  async login(@CurrentUser() currentUser: User) {
    return await this.authService.login(currentUser);
  }

}
