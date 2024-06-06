import { ApiProperty } from '@nestjs/swagger';

export class LoggedInPresenter {
  @ApiProperty({
    type: String,
  })
  public accessToken!: string;

  constructor(data: LoggedInPresenter) {
    Object.assign(this, data);
  }
}
