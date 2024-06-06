import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTenantDto {
  @ApiProperty({
    type: String,
    description: 'firstName',
    example: 'Khoa',
  })
  @IsString()
  public firstName?: string;

  @ApiProperty({
    type: String,
    description: 'lastName',
    example: 'Pham',
  })
  @IsString()
  public lastName?: string;

  @ApiProperty({
    type: String,
    description: 'Phone number of the tenant',
    example: '1234567890',
  })
  @IsString()
  public phoneNumber!: string;

  @ApiProperty({
    type: String,
    description: 'password',
    example: '1234567890',
  })
  @IsString()
  public password?: string;
}