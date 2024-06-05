import { ApiProperty } from '@nestjs/swagger';

export class CreateTenantPresenter {
  @ApiProperty({
    type: Boolean,
  })
  public success!: boolean;

  constructor(data: CreateTenantPresenter) {
    Object.assign(this, data);
  }
}
