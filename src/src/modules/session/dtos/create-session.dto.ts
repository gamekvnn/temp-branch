import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { SessionStatusEnum } from '../repositories/entities';

export class CreateSessionDto {
  @ApiProperty({
    example: '60b6a0c3f5d3b34130f8c5c7',
    description: 'The room ID',
  })
  @IsString()
  public roomId!: string;

  @ApiProperty({ example: 500, description: 'The deposit amount' })
  @IsNumber()
  public depositAmount!: number;

  @ApiProperty({
    example: '60b6a0c3f5d3b34130f8c5c8',
    description: 'The property ID',
  })
  @IsString()
  public propertyId!: string;

  @ApiProperty({
    example: '60b6a0c3f5d3b34130f8c5c9',
    description: 'The tenant ID',
  })
  @IsString()
  public tenantId!: string;

  @ApiProperty({
    example: '2023-01-01',
    description: 'The start date of the session',
  })
  @IsDateString()
  public startDate!: Date;

  @ApiProperty({
    example: '2023-12-31',
    description: 'The termination date of the session',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  public terminationDate?: Date;

  @ApiProperty({
    example: SessionStatusEnum.ACTIVE,
    description: 'The status of the session',
  })
  @IsEnum(SessionStatusEnum)
  public status!: SessionStatusEnum;
}
