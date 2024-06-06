import { Injectable } from '@nestjs/common';

import { RoomFeeEntity } from './repositories/entities';
import { RoomFeeRepository } from './repositories/room-fee.repository';


@Injectable()
export class RoomFeeService {
  constructor(
    private readonly roomFeeRepository: RoomFeeRepository,
  ) {}

  public async findById(id: string): Promise<RoomFeeEntity | null> {
    return this.roomFeeRepository.findOneById(id);
  }
}
