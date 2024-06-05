import { ApiProperty } from '@nestjs/swagger';

export class UpdateSessionStatusDto {
  @ApiProperty()
  public status!: string; // Status value (e.g., 'pending', 'confirmed', 'cancelled')
}
