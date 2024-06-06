import { ApiProperty } from '@nestjs/swagger';

export class CreatedTenantPresenter {
  @ApiProperty({
    type: Boolean,
  })
  public success!: boolean;

  constructor(data: CreatedTenantPresenter) {
    Object.assign(this, data);
  }
}
