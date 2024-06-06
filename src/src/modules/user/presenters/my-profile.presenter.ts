import { ApiProperty } from '@nestjs/swagger';

export class MyProfilePresenter {
  @ApiProperty()
  public _id!: string;

  @ApiProperty()
  public phoneNumber!: string;

  constructor(partial: Partial<MyProfilePresenter>) {
    Object.assign(this, partial);
  }
}
