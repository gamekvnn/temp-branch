import { Injectable } from '@nestjs/common';

import { ReceiptEntity } from './repositories/entities';
import { ReceiptRepository } from './repositories/receipt.repository';


@Injectable()
export class ReceiptService {
  constructor(
    private readonly receiptRepository: ReceiptRepository,
  ) {}

  public async findById(id: string): Promise<ReceiptEntity | null> {
    return this.receiptRepository.findOneById(id);
  }
}
