import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

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

  @ApiProperty()
  @IsEnum(RoomTypesEnum)
  @IsOptional()
  public type?: RoomTypesEnum;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  public floor?: number;
}
