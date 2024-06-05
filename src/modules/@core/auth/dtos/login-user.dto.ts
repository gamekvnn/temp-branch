import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber, IsString } from 'class-validator';

export class LoginUserDto {
  @ApiProperty()
  @IsPhoneNumber()
  public phoneNumber!: string;

  @ApiProperty()
  @IsString()
  public password!: string;
}
