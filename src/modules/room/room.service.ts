import { Injectable, NotFoundException } from '@nestjs/common';
import { Types } from 'mongoose';

import { SessionService } from '../session/session.service';

import { RoomEntity, RoomTypesEnum } from './repositories/entities';
import { RoomRepository } from './repositories/room.repository';
import { EditRoomDto } from './dtos/edit-room.dto';
import { CreateRoomDto } from './dtos/create-room.dto';

@Injectable()
export class RoomService {
  constructor(
    private readonly roomRepository: RoomRepository,
    private readonly sessionService: SessionService,
  ) {}

  public async findById(id: string): Promise<RoomEntity | null> {
    return this.roomRepository.findOneById(id);
  }

  public async getAllByPropertyId(
    propertyId: Types.ObjectId,
  ): Promise<RoomEntity[] | null> {
    const rooms = await this.roomRepository.findAll({
      propertyId: propertyId,
    });
    if (!rooms) {
      return null;
    }

    // Fetch session for each room and attach it to the room object
    for (const room of rooms) {
      const session = await this.sessionService.findByRoomId(
        room._id.toString(),
      );
      if (session) {
        room.session = session;
      }
    }

    return rooms;
  }

  public async createRooms(
    roomAmount: number,
    floorAmount: number,
    roomPrice: number,
    propertyId: string,
    area: number,
    roomType: RoomTypesEnum,
  ): Promise<boolean> {
    try {
      for (let floor = 1; floor <= floorAmount; floor++) {
        for (let room = 1; room <= roomAmount; room++) {
          const roomNumber = `${floor}${String(room).padStart(2, '0')}`;
          const newRoom = new RoomEntity();
          newRoom.roomNumber = roomNumber;
          newRoom.price = roomPrice;
          newRoom.propertyId = new Types.ObjectId(propertyId);
          newRoom.type = roomType;
          newRoom.floor = floor;
          newRoom.area = area;

          const createdRoom = await this.roomRepository.create(newRoom);

          if (!createdRoom) {
            throw new Error('Failed to create room');
          }
        }
      }

      return true; // All rooms created successfully
    } catch (error) {
      console.error('Error creating rooms:', error);
      return false; // Failed to create rooms
    }
  }

  public async createRoom(
    createRoomDto: CreateRoomDto,
    propertyId: string,
  ): Promise<boolean> {
    try {
      const {
        roomNumber,
        price,
        type,
        floor,
        area,
        bathroomQuantity,
        bedQuantity,
        bedroomQuantity,
        kitchenQuantity,
        livingRoomQuantity,
        haveBalcony,
      } = createRoomDto;

      const newRoom = new RoomEntity(); // Use constructor to map DTO
      newRoom.propertyId = new Types.ObjectId(propertyId); // Set property ID
      newRoom.roomNumber = roomNumber;
      newRoom.price = price;
      newRoom.propertyId = new Types.ObjectId(propertyId);
      newRoom.type = type;
      newRoom.floor = floor;
      newRoom.area = area;
      newRoom.bathroomQuantity = bathroomQuantity;
      newRoom.bedQuantity = bedQuantity;
      newRoom.bedroomQuantity = bedroomQuantity;
      newRoom.kitchenQuantity = kitchenQuantity;
      newRoom.livingRoomQuantity = livingRoomQuantity;
      newRoom.haveBalcony = haveBalcony;
      await this.roomRepository.create(newRoom);
      return true;
    } catch (error) {
      console.error('Error creating room:', error);
      return false; // Return null on failure
    }
  }

  public async editRoom(id: string, updateData: EditRoomDto): Promise<boolean> {
    const result = await this.roomRepository.roomModel.updateOne(
      { _id: new Types.ObjectId(id) },
      { $set: updateData },
    );

    if (result.matchedCount === 0) {
      throw new NotFoundException('Room not found');
    }
    return true;
  }
}
