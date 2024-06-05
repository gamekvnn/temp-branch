import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { TenantService } from '../tenant.service';
import { CreateTenantDto } from '../dtos/create-tenant.dto';
import { GotTenantsPresenter } from '../presenters/get-tenants.presenter';
import { CreatedTenantPresenter } from '../presenters/created-tenant.presenter';

import { AuthUserGuard } from '@/modules/@core/auth/guards/auth.user.guard';

@ApiTags('modules.tenant')
@Controller({
  version: '1',
  path: '/tenant',
})
export class TenantUserController {
  constructor(private readonly tenantService: TenantService) {}

  @ApiBearerAuth()
  @Post('/')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthUserGuard)
  @ApiOkResponse({
    description: 'Tenant created successfully',
    type: CreatedTenantPresenter,
  })
  public async createTenant(
    @Body() createTenantDto: CreateTenantDto,
  ): Promise<CreatedTenantPresenter> {
    const createdTenant = await this.tenantService.createTempTenant(
      createTenantDto,
    );

    if (!createdTenant) {
      throw new NotFoundException('Session could not be created');
    }

    return new CreatedTenantPresenter({
      success: true,
    });
  }

  @ApiBearerAuth()
  @Get('/')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthUserGuard)
  @ApiOkResponse({
    description: 'Get tenants successfully',
    type: GotTenantsPresenter,
  })
  public async getTenants(): Promise<GotTenantsPresenter> {
    const foundTenant = await this.tenantService.getAll();

    if (!foundTenant) {
      throw new NotFoundException('tenants not found');
    }
    return new GotTenantsPresenter({
      success: true,
      tenants: foundTenant,
    });
  }
}
