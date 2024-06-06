import { Injectable } from '@nestjs/common';

import { ContractEntity } from './repositories/entities';
import { ContractRepository } from './repositories/contract.repository';


@Injectable()
export class ContractService {
  constructor(
    private readonly contractRepository: ContractRepository,
  ) {}

  public async findById(id: string): Promise<ContractEntity | null> {
    return this.contractRepository.findOneById(id);
  }
}
