import {
  Body,
  ClassSerializerInterceptor,
  Controller, Get,
  Inject, Patch, Post, UseGuards, UseInterceptors,
} from '@nestjs/common';
import {ApiBody, ApiCreatedResponse, ApiTags} from '@nestjs/swagger';
import {Auth, CurrentUser,} from './decorator';
import { AuthService } from "./auth.service";
import {LocalAuthGuard} from "./guard/local-auth.guard";
import {LoginDto} from "./dto/login-dto";
import {User} from "../users/entities/user.entity";
import {AuthResponseDto} from "./dto/auth-response.dto";
import {ApiSerializeResponse} from "../common/dto/serialize.dto";
import {JwtPayload} from "./strategies/jwt.payload";
import {SerializerResponse} from "../common/lib/response.lib";
import {EditProfileDto} from "./dto/edit-profile.dto";
import {JwtRefreshGuard} from "./guard/jwt-refresh.guard";
import {LoginResponseDto} from "./dto/login-response.dto";
import {RefreshAuthTokenDto} from "./dto/refresh-auth-token.dto";
import {ForgotPasswordDto} from "./dto/forgot-password.dto";


@ApiTags(`Auth`)
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @ApiCreatedResponse({ type: AuthResponseDto })
  @ApiBody({ type: LoginDto })
  @Post('login')
  async login(@CurrentUser() currentUser: User) {
    return await this.authService.login(currentUser);
  }

  @Auth()
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('profile')
  async getProfile(@CurrentUser('uuid') uuid: string) {
    return await this.authService.getUserById(uuid);
  }

  @Auth()
  @Patch('edit_profile')
  async update(
      @CurrentUser('uuid') uuid: string,
      @Body() editProfileDto: EditProfileDto,
  ) {
    return await this.authService.editProfile(uuid, editProfileDto);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  @ApiSerializeResponse(LoginResponseDto)
  @ApiBody({ type: RefreshAuthTokenDto })
  async refresh(@CurrentUser() user: User) {
    return await this.authService.login(user);
  }


  @Post('recover')
  async recoverPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return await this.authService.forgotPassword(forgotPasswordDto);
  }
}
