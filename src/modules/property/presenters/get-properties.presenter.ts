import { ApiProperty } from '@nestjs/swagger';

import { PropertyEntity } from '../repositories/entities';

export class GotProrpertiesPresenter {
  @ApiProperty({
    type: Boolean,
  })
  public success!: boolean;

  @ApiProperty({
    type: [PropertyEntity],
  })
  public properties!: PropertyEntity[];

  constructor(data: GotProrpertiesPresenter) {
    Object.assign(this, data);
  }
}
