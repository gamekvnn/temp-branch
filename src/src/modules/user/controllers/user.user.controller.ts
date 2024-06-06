import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { MyProfilePresenter } from '../presenters/my-profile.presenter';
import { UserService } from '../user.service';

import { ReqUser } from '@/common';
import { Payload } from '@/modules/@core/auth/payload.interface';
import { AuthUserGuard } from '@/modules/@core/auth/guards/auth.user.guard';

@ApiTags('modules.user.users')
@Controller({
  version: '1',
  path: '/users',
})
export class UserUserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(AuthUserGuard)
  @Get('/me')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Get my profile',
    type: MyProfilePresenter,
  })
  public async getMyProfile(
    @ReqUser() user: Payload,
  ): Promise<MyProfilePresenter> {
    const foundUser = await this.userService.findById(user.userId);

    if (!foundUser) {
      throw new NotFoundException('User not found');
    }

    return new MyProfilePresenter({
      _id: foundUser._id.toString(),
      phoneNumber: foundUser.phoneNumber,
    });
  }

}
