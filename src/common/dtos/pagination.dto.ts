import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsPositive, Max } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Transform(({ value }: { value: string }) => parseInt(value, 10))
  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  public page: number = 1;

  @ApiPropertyOptional({
    default: 100,
    type: Number,
    maximum: 100,
    minimum: 0,
  })
  @Max(100)
  @IsPositive()
  @Transform(({ value }: { value: string }) => parseInt(value))
  @IsOptional()
  public limit: number = 100;

  constructor(init?: Partial<PaginationDto>) {
    Object.assign(this, init);
  }
}
