import { ApiProperty } from '@nestjs/swagger';

export class CheckedUserPresenter {
  @ApiProperty({
    type: Boolean,
  })
  public success!: boolean;

  constructor(data: CheckedUserPresenter) {
    Object.assign(this, data);
  }
}
