import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Types } from 'mongoose';

import { SessionService } from '../session.service';
import { CreateSessionPresenter } from '../presenters/create-session.presenter';
import { CreateSessionDto } from '../dtos/create-session.dto';
import { GetSessionByRoomIdPresenter } from '../presenters/get-session-by-room-id.dto';
import { UpdateSessionStatusDto } from '../dtos/update-session-status.dto';

import { AuthUserGuard } from '@/modules/@core/auth/guards/auth.user.guard';
import { TenantService } from '@/modules/tenant/tenant.service';
import { ReqUser } from '@/common';
import { PropertyService } from '@/modules/property/property.service';
import { Payload } from '@/modules/@core/auth/payload.interface';

@ApiTags('modules.session')
@Controller({
  version: '1',
  path: '/session',
})
export class SessionUserController {
  constructor(
    private readonly sessionService: SessionService,
    private readonly tenantService: TenantService,
    private readonly propertyService: PropertyService,
  ) {}

  @ApiBearerAuth()
  @Post('/')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthUserGuard)
  @ApiOkResponse({
    description: 'Session created successfully',
    type: CreateSessionPresenter,
  })
  public async createSession(
    @Body() createSessionDto: CreateSessionDto,
      @ReqUser() user: Payload,
  ): Promise<CreateSessionPresenter> {
    // Check if tenantID exists
    if (!Types.ObjectId.isValid(createSessionDto.tenantId)) {
      const tenant = await this.tenantService.createTempTenant({
        phoneNumber: createSessionDto.tenantId.toString(),
      });
      createSessionDto.tenantId = tenant._id.toString();
    } else {
      let tenant = await this.tenantService.findById(
        createSessionDto.tenantId.toString(),
      );
      if (!tenant) {
        tenant = await this.tenantService.createTempTenant({
          phoneNumber: createSessionDto.tenantId.toString(),
        });
      }
      createSessionDto.tenantId = tenant._id.toString();
    }

    const property = await this.propertyService.findByUserId(
      createSessionDto.propertyId,
      user.userId,
    );
    if (!property) {
      throw new NotFoundException(
        'Session could not be created because this user have no property',
      );
    }

    const createdSession = await this.sessionService.createSession(
      createSessionDto,
    );

    if (!createdSession) {
      throw new NotFoundException('Session could not be created');
    }

    return new CreateSessionPresenter({
      success: true,
    });
  }

  @ApiBearerAuth()
  @Get('/roomId/:roomId')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthUserGuard)
  @ApiOkResponse({
    description: 'Get session by room ID successfully',
    type: GetSessionByRoomIdPresenter,
  })
  public async getSessionByRoomId(
    @Param('roomId') roomId: string,
  ): Promise<GetSessionByRoomIdPresenter> {
    const foundSession = await this.sessionService.findByRoomId(roomId);

    if (!foundSession) {
      throw new NotFoundException('Session not found');
    }
    return new GetSessionByRoomIdPresenter({
      success: true,
      session: foundSession,
    });
  }

  @ApiBearerAuth()
  @Patch('/:id/status') // Use PATCH for partial updates
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthUserGuard)
  @ApiOkResponse({ description: 'Session status updated successfully' })
  public async updateSessionStatus(
    @Param('id') id: string,
      @Body() updateSessionStatusDto: UpdateSessionStatusDto,
  ): Promise<void> {
    const updatedSession = await this.sessionService.updateSessionStatus(
      id,
      updateSessionStatusDto.status,
    );

    if (!updatedSession) {
      throw new NotFoundException('Session not found or update failed');
    }
    // No content returned (204) on success as per REST principles
    return;
  }
}
