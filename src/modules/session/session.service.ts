import { Injectable, NotFoundException } from '@nestjs/common';
import { Types } from 'mongoose';

import { SessionEntity } from './repositories/entities';
import { SessionRepository } from './repositories/session.repository';
import { CreateSessionDto } from './dtos/create-session.dto';

@Injectable()
export class SessionService {
  constructor(private readonly sessionRepository: SessionRepository) {}

  public async findById(id: string): Promise<SessionEntity | null> {
    return this.sessionRepository.findOneById(id);
  }

  public async createSession(
    createSessionDto: CreateSessionDto,
  ): Promise<SessionEntity> {
    const session = new SessionEntity();
    session.roomId = new Types.ObjectId(createSessionDto.roomId);
    session.propertyId = new Types.ObjectId(createSessionDto.propertyId);
    session.depositAmount = createSessionDto.depositAmount;
    session.tennantId = new Types.ObjectId(createSessionDto.tenantId);
    session.startDate = new Date(createSessionDto.startDate);
    session.terminationDate = createSessionDto.terminationDate
      ? new Date(createSessionDto.terminationDate)
      : undefined;
    session.status = createSessionDto.status;

    return this.sessionRepository.create(session);
  }

  public async findByRoomId(roomId: string): Promise<SessionEntity | null> {
    return this.sessionRepository.findOne({
      roomId: new Types.ObjectId(roomId),
    });
  }

  public async updateSessionStatus(
    sessionId: string,
    newStatus: string,
  ): Promise<boolean> {
    try {
      const session = await this.sessionRepository.findByIdAndUpdate(
        sessionId,
        { $set: { status: newStatus } },
        { new: true }, // Return the updated document
      );

      if (!session) {
        throw new NotFoundException('Session not found or update failed');
      }

      return true;
    } catch (error) {
      console.error('Error updating session status:', error);
      return false;
    }
  }
}
