import { ApiProperty } from '@nestjs/swagger';

import { SessionEntity } from '../repositories/entities';

export class GetSessionByRoomIdPresenter {
  @ApiProperty({
    type: Boolean,
  })
  public success!: boolean;

  @ApiProperty({
    type: SessionEntity,
  })
  public session!: SessionEntity;

  constructor(partial: Partial<GetSessionByRoomIdPresenter>) {
    Object.assign(this, partial);
  }
}
