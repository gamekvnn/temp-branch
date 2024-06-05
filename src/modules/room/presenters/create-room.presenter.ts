import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomPresenter {
  @ApiProperty({
    type: Boolean,
  })
  public success!: boolean;

  constructor(data: CreateRoomPresenter) {
    Object.assign(this, data);
  }
}
