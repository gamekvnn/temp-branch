import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

import { RoomTypesEnum } from '../repositories/entities';

export class EditRoomDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  public roomName?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  public price?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  public area?: number;

  @ApiProperty({ required: false })
  @IsString()
  public roomDescription?: string;

  @ApiProperty()
  @IsEnum(RoomTypesEnum)
  @IsOptional()
  public type?: RoomTypesEnum;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  public floor?: number;

  @ApiProperty({ required: false })
  @IsInt()
  @Min(0)
  public waterPrice?: number;

  @ApiProperty({ required: false })
  @IsInt()
  @Min(0)
  public electricPrice?: number;
}
