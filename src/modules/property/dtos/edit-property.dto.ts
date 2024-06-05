import { ApiProperty } from '@nestjs/swagger';

import {
  PaymentOptionEnum,
  PaymentStyleEnum,
  PropertyBillIssueTypesEnum,
  UtilityPaymentStyleEnum,
} from '../repositories/entities';

export class EditPropertyDto {
  @ApiProperty({ required: false, example: 'Modern Apartment' })
  public name?: string;

  @ApiProperty({ required: false, example: 'Studio' })
  public type?: string;

  @ApiProperty({ required: false, example: 2 })
  public roomQuantity?: number;

  @ApiProperty({ required: false, example: 1 })
  public floors?: number;

  @ApiProperty({ required: false, example: 12.345678 })
  public latitude?: number;

  @ApiProperty({ required: false, example: -98.765432 })
  public longitude?: number;

  @ApiProperty({ required: false, example: 1000 })
  public area?: number;

  @ApiProperty({ required: false, example: 1500 })
  public rentalPrice?: number;

  @ApiProperty({
    enum: PropertyBillIssueTypesEnum,
    required: false,
    example: PropertyBillIssueTypesEnum.MONTHLY,
  })
  public billIssueType?: string; // Assuming you have PropertyBillIssueTypesEnum defined elsewhere

  @ApiProperty({ required: true, example: 15 })
  public billIssueAtDay!: number;

  @ApiProperty({ required: false, example: 5 })
  public waterPrice?: number;

  @ApiProperty({ required: false, example: 0.1 })
  public electricPrice?: number;

  // New properties
  @ApiProperty({
    enum: UtilityPaymentStyleEnum,
    required: false,
    example: UtilityPaymentStyleEnum.PER_KWH,
  })
  public waterPaymentStyle?: UtilityPaymentStyleEnum;

  @ApiProperty({
    enum: PaymentOptionEnum,
    required: false,
    example: PaymentOptionEnum.MONTH_END,
  })
  public paymentOption?: PaymentOptionEnum;

  @ApiProperty({
    enum: PaymentStyleEnum,
    required: false,
    example: PaymentStyleEnum.BEFORE,
  })
  public paymentStyle?: PaymentStyleEnum;
}
