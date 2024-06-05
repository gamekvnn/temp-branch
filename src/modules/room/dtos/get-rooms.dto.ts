import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetRoomDto {
  @ApiProperty()
  @IsString()
  public propertyId!: string;
}
