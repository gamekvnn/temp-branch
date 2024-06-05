import { ApiProperty } from '@nestjs/swagger';

export class EdittedProrpertiesPresenter {
  @ApiProperty({
    type: Boolean,
  })
  public success!: boolean;

  constructor(data: EdittedProrpertiesPresenter) {
    Object.assign(this, data);
  }
}
