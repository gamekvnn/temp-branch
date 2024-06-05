import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';

import { UserTypesEnum } from './enums/user-types.enum';
import { Payload } from './payload.interface';

interface GenerateTokenParams {
  userId: string;
  type: UserTypesEnum;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  public async generateToken({ userId, type } : GenerateTokenParams, options?: JwtSignOptions): Promise<{ accessToken: string }> {
    const payload: Payload = { userId, type };

    return {
      accessToken: await this.jwtService.signAsync(payload, options),
    };
  }
}
