import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomsPresenter {
  @ApiProperty({
    type: Boolean,
  })
  public success!: boolean;

  constructor(data: CreateRoomsPresenter) {
    Object.assign(this, data);
  }
}
