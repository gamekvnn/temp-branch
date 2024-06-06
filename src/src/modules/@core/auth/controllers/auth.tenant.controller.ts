import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import bcrypt from 'bcrypt';

import { AuthService } from '../auth.service';
import { LoggedInPresenter } from '../presenters/logged-in.presenter';
import { LoginUserDto } from '../dtos/login-user.dto';
import { UserTypesEnum } from '../enums/user-types.enum';
import { CheckedUserPresenter } from '../presenters/checked-user.presenter';
import { AuthUserGuard } from '../guards/auth.user.guard';
import { RegisteredTenantPresenter } from '../presenters/register.presenter';

import { TenantService } from '@/modules/tenant/tenant.service';
import { TenantEntity } from '@/modules/tenant/repositories/entities';
import { CreateTenantDto } from '@/modules/tenant/dtos/create-tenant.dto';

@ApiTags('modules.auth.tenant')
@Controller({
  version: '1',
  path: '/tenant/auth',
})
export class AuthTenantController {
  constructor(
    private readonly authService: AuthService,
    private readonly tenantService: TenantService,
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
    const foundTenant = await this.tenantService.findByPhoneNumber(
      loginUserDto.phoneNumber,
    );

    if (!foundTenant) {
      throw new NotFoundException('Invalid phone number or password');
    }
    const isPasswordValid = await bcrypt.compare(
      loginUserDto.password,
      foundTenant.password,
    );

    if (!isPasswordValid) {
      throw new BadRequestException('Invalid phone number or password');
    }

    const { accessToken } = await this.authService.generateToken({
      userId: foundTenant._id.toString(),
      type: UserTypesEnum.TENANT,
    });

    return new LoggedInPresenter({
      accessToken,
    });
  }

  @Post('/register')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Tenant registered successfully',
    type: TenantEntity, // Adjust this if you have a specific response DTO
  })
  public async register(
    @Body() createTenantDto: CreateTenantDto,
  ): Promise<RegisteredTenantPresenter> {
    try {
      const createdTenant = await this.tenantService.create(createTenantDto);

      return new RegisteredTenantPresenter({
        success: createdTenant ? true : false,
      });
    } catch (error) {
      throw new BadRequestException('Registration failed');
    }
  }

  @ApiBearerAuth()
  @Post('/check')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthUserGuard)
  @ApiOkResponse({
    description: 'Checked user successfully',
    type: CheckedUserPresenter,
  })
  public checkUser(): CheckedUserPresenter {
    return new CheckedUserPresenter({
      success: true,
    });
  }
}
