import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ListDto<T> {
  @ApiProperty()
  public items!: T[];

  @ApiProperty()
  public total!: number;

  @ApiPropertyOptional()
  public nextPage?: number;
}
