import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsInt, IsNumber, IsString, Min } from 'class-validator';

import { RoomTypesEnum } from '../repositories/entities';

export class CreateRoomDto {
  @ApiProperty()
  @IsString()
  public roomNumber!: string;

  @ApiProperty({ required: false })
  @IsString()
  public roomName?: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  public price!: number;

  @ApiProperty()
  @IsString()
  public propertyId!: string; 

  @ApiProperty()
  @IsEnum(RoomTypesEnum)
  public type!: RoomTypesEnum;

  @ApiProperty()
  @IsInt()
  @Min(1)
  public floor!: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  public area!: number;

  @ApiProperty({ required: false })
  @IsInt()
  @Min(0)
  public bedQuantity?: number;

  @ApiProperty({ required: false })
  @IsInt()
  @Min(0)
  public bathroomQuantity?: number;

  @ApiProperty({ required: false })
  @IsInt()
  @Min(0)
  public bedroomQuantity?: number;

  @ApiProperty({ required: false })
  @IsInt()
  @Min(0)
  public livingRoomQuantity?: number;

  @ApiProperty({ required: false })
  @IsInt()
  @Min(0)
  public kitchenQuantity?: number;

  @ApiProperty({ required: false })
  @IsBoolean()
  public haveBalcony?: boolean;
}