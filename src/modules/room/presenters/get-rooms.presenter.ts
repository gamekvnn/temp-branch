import { ApiProperty } from '@nestjs/swagger';

import { RoomEntity } from '../repositories/entities';

export class GetRoomsPresenter {
  @ApiProperty({
    type: Boolean,
  })
  public success!: boolean;

  @ApiProperty({
    type: [RoomEntity],
  })
  public rooms!: RoomEntity[];

  constructor(data: GetRoomsPresenter) {
    Object.assign(this, data);
  }
}
