import { ApiProperty } from '@nestjs/swagger';

export class RegisteredTenantPresenter {
  @ApiProperty({
    type: Boolean,
  })
  public success!: boolean;

  constructor(data: RegisteredTenantPresenter) {
    Object.assign(this, data);
  }
}
