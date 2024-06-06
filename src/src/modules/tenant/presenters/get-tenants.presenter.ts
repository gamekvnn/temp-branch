import { ApiProperty } from '@nestjs/swagger';

import { TenantEntity } from '../repositories/entities';


export class GotTenantsPresenter {
  @ApiProperty({
    type: Boolean,
  })
  public success!: boolean;

  @ApiProperty({
    type: [TenantEntity],
  })
  public tenants!: TenantEntity[];

  constructor(data: GotTenantsPresenter) {
    Object.assign(this, data);
  }
}
