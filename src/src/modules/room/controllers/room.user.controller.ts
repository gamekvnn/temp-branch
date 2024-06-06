import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { RoomService } from '../room.service';
import { GetRoomsPresenter } from '../presenters/get-rooms.presenter';
import { CreateRoomsPresenter } from '../presenters/create-rooms.presenter';
import { CreateRoomsDto } from '../dtos/create-rooms.dto';
import { EditRoomDto } from '../dtos/edit-room.dto';
import { EditRoomPresenter } from '../presenters/edit-room.presenter';
import { GetRoomDto } from '../dtos/get-rooms.dto';
import { CreateRoomPresenter } from '../presenters/create-room.presenter';
import { CreateRoomDto } from '../dtos/create-room.dto';

import { AuthUserGuard } from '@/modules/@core/auth/guards/auth.user.guard';
import { ReqUser } from '@/common';
import { Payload } from '@/modules/@core/auth/payload.interface';
import { PropertyService } from '@/modules/property/property.service';

@ApiTags('modules.room')
@Controller({
  version: '1',
  path: '/rooms',
})
export class RoomUserController {
  constructor(
    private readonly roomService: RoomService,
    private readonly propertyService: PropertyService,
  ) {}

  @ApiBearerAuth()
  @Post('/')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthUserGuard)
  @ApiOkResponse({
    description: 'Get rooms successfully',
    type: GetRoomsPresenter,
  })
  public async getRooms(
    @Body() getRoomsDto: GetRoomDto,
      @ReqUser() user: Payload,
  ): Promise<GetRoomsPresenter> {
    const property = await this.propertyService.findByUserId(
      getRoomsDto.propertyId,
      user.userId,
    );

    if (!property) {
      throw new NotFoundException(
        'User not own property or property not found',
      );
    }
    const foundRooms = await this.roomService.getAllByPropertyId(property._id);

    if (!foundRooms) {
      throw new NotFoundException('Rooms not found');
    }
    return new GetRoomsPresenter({
      success: true,
      rooms: foundRooms,
    });
  }

  @ApiBearerAuth()
  @Post('/creates')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthUserGuard)
  @ApiOkResponse({
    description: 'Rooms created successfully',
  })
  public async createRooms(
    @Body() createRoomsDto: CreateRoomsDto,
      @ReqUser() user: Payload,
  ): Promise<CreateRoomsPresenter> {
    const {
      roomAmount,
      floorAmount,
      roomPrice,
      area,
      roomType,
      electricPrice,
      waterPrice,
    } = createRoomsDto;

    const property = await this.propertyService.findByUserId(
      createRoomsDto.propertyId,
      user.userId,
    );
    if (!property) {
      throw new NotFoundException(
        'Rooms could not be created because this user have no property',
      );
    }
    const created = await this.roomService.createRooms(
      roomAmount,
      floorAmount,
      roomPrice,
      property._id.toString(),
      area,
      roomType,
      waterPrice,
      electricPrice,
    );

    if (!created) {
      throw new NotFoundException('Rooms could not be created');
    }
    return { success: true };
  }

  @ApiBearerAuth()
  @Post('/create') // Consider using a more specific endpoint name like '/create'
  @HttpCode(HttpStatus.CREATED) // Created status code for successful creation
  @UseGuards(AuthUserGuard)
  @ApiOkResponse({
    description: 'Room created successfully',
    type: CreateRoomPresenter, // Assuming CreateRoomPresenter handles single room response
  })
  public async createRoom(
    @Body() createRoomDto: CreateRoomDto,
      @ReqUser() user: Payload,
  ): Promise<CreateRoomPresenter> {
    // Remove roomAmount and floorAmount usage

    const property = await this.propertyService.findByUserId(
      createRoomDto.propertyId,
      user.userId,
    );

    if (!property) {
      throw new NotFoundException(
        'Rooms could not be created because this user has no property',
      );
    }

    const createdRoom = await this.roomService.createRoom(
      createRoomDto,
      property._id.toString(),
    );

    if (!createdRoom) {
      throw new NotFoundException('Room could not be created');
    }

    // Use CreateRoomPresenter to format the response with the created room details
    return new CreateRoomPresenter({
      success: true,
    });
  }

  @ApiBearerAuth()
  @Put('/edit/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthUserGuard)
  @ApiOkResponse({
    description: 'Room updated successfully',
  })
  public async editRoom(
    @Param('id') id: string,
      @Body() editRoomDto: EditRoomDto,
  ): Promise<EditRoomPresenter> {
    const updatedRoom = await this.roomService.editRoom(id, editRoomDto);

    if (!updatedRoom) {
      throw new NotFoundException('Room could not be updated');
    }

    return { success: true };
  }
}
