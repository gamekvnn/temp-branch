import { Injectable } from '@nestjs/common';

import { UserEntity } from './repositories/entities';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  public async findById(id: string): Promise<UserEntity | null> {
    return this.userRepository.findOneById(id);
  }

  public async findByPhoneNumber(phoneNumber: string): Promise<UserEntity | null> {
    return this.userRepository.findOneByPhoneNumber(phoneNumber);
  }
}
