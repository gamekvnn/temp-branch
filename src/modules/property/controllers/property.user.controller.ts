import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { GotProrpertiesPresenter } from '../presenters/get-properties.presenter';
import { EditPropertyDto } from '../dtos/edit-property.dto';
import { EdittedProrpertiesPresenter } from '../presenters/edit-property.presenter';

import { AuthUserGuard } from '@/modules/@core/auth/guards/auth.user.guard';
import { ReqUser } from '@/common';
import { Payload } from '@/modules/@core/auth/payload.interface';
import { PropertyService } from '@/modules/property/property.service';

@ApiTags('modules.properties')
@Controller({
  version: '1',
  path: '/properties',
})
export class PropertyUserController {
  constructor(private readonly propertyService: PropertyService) {}

  @ApiBearerAuth()
  @Get('/')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthUserGuard)
  @ApiOkResponse({
    description: 'Get properties by user successfully',
    type: GotProrpertiesPresenter,
  })
  public async getProperties(
    @ReqUser() user: Payload,
  ): Promise<GotProrpertiesPresenter> {
    const foundProperties = await this.propertyService.getPropertiesByUserId(
      user.userId,
    );

    if (!foundProperties) {
      throw new NotFoundException('Properties not found');
    }
    console.log(foundProperties);
    return new GotProrpertiesPresenter({
      success: true,
      properties: foundProperties,
    });
  }

  @ApiBearerAuth()
  @Put('/edit/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthUserGuard)
  @ApiOkResponse({
    description: 'Property updated successfully',
  })
  public async editProperty(
    @Param('id') id: string,
      @Body() editPropertyDto: EditPropertyDto,
      @ReqUser() user: Payload,
  ): Promise<EdittedProrpertiesPresenter> {

    const updatedRoom = await this.propertyService.editProperty(
      id,
      user.userId,
      editPropertyDto,
    );

    if (!updatedRoom) {
      throw new NotFoundException('Room could not be updated');
    }

    return { success: true };
  }
}
