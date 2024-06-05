import { ApiProperty } from '@nestjs/swagger';


export class CreateSessionPresenter {
  @ApiProperty({
    type: Boolean,
  })
  public success!: boolean;

  constructor(data: CreateSessionPresenter) {
    Object.assign(this, data);
  }
}
