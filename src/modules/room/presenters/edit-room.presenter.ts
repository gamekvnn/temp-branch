import { ApiProperty } from '@nestjs/swagger';

export class EditRoomPresenter {
  @ApiProperty({
    type: Boolean,
  })
  public success!: boolean;

  constructor(data: EditRoomPresenter) {
    Object.assign(this, data);
  }
}
