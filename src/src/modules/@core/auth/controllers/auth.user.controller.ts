import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from '../auth.service';
import { LoggedInPresenter } from '../presenters/logged-in.presenter';
import { LoginUserDto } from '../dtos/login-user.dto';
import { UserTypesEnum } from '../enums/user-types.enum';
import { CheckedUserPresenter } from '../presenters/checked-user.presenter';
import { AuthUserGuard } from '../guards/auth.user.guard';

import { UserService } from '@/modules/user/user.service';

@ApiTags('modules.auth.user')
@Controller({
  version: '1',
  path: '/auth',
})
export class AuthUserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @ApiBearerAuth()
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'User logged in successfully',
    type: LoggedInPresenter,
  })
  public async login(
    @Body() loginUserDto: LoginUserDto,
  ): Promise<LoggedInPresenter> {
    const foundUser = await this.userService.findByPhoneNumber(loginUserDto.phoneNumber);

    if (!foundUser) {
      throw new NotFoundException('User not found');
    }

    // TODO: Verify password later

    const { accessToken } = await this.authService.generateToken({
      userId: foundUser._id.toString(),
      type: UserTypesEnum.USER,
    });

    return new LoggedInPresenter({
      accessToken,
    });
  }

  @ApiBearerAuth()
  @Post('/check')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthUserGuard)
  @ApiOkResponse({
    description: 'Checked user successfully',
    type: CheckedUserPresenter,
  })
  public checkUser(
  ): CheckedUserPresenter {
    return new CheckedUserPresenter({
      success: true,
    });
  }
}
