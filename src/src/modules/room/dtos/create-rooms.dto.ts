import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNumber, IsString, Min } from 'class-validator';

import { RoomTypesEnum } from '../repositories/entities';

export class CreateRoomsDto {
  @ApiProperty()
  @IsInt()
  @Min(1)
  public roomAmount!: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  public floorAmount!: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  public roomPrice!: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  public electricPrice!: number;

  @ApiProperty()
  @IsString()
  public propertyId!: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  public waterPrice!: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  public area!: number;

  @ApiProperty()
  @IsEnum(RoomTypesEnum)
  public roomType!: RoomTypesEnum;
}
