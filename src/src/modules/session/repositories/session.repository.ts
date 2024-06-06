/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { Model, Types, UpdateQuery } from 'mongoose';


import { SessionDocument, SessionEntity } from './entities';

import {
  DatabaseMongoObjectIdRepositoryAbstract,
} from '@/base/database/abstracts/mongo/repositories/database.mongo.object-id.repository.abstract';
import { DatabaseModel } from '@/base/database/decorators/database.decorator';
import { IDatabaseCreateManyOptions } from '@/base/database/interfaces/database.interface';

@Injectable()
export class SessionRepository extends DatabaseMongoObjectIdRepositoryAbstract<
SessionEntity,
SessionDocument
> {
  constructor(
    @DatabaseModel(SessionEntity.name)
    public sessionModel: Model<SessionEntity>,
  ) {
    super(sessionModel);
  }

  public async createMany<Dto>(
    _data: Dto[],
    _options?: IDatabaseCreateManyOptions | undefined,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  public async findByIdAndUpdate(
    sessionId: string,
    update: UpdateQuery<SessionEntity>,
    options?: { new: boolean }, // Optional option to return the updated document
  ): Promise<SessionDocument | null> {
    try {
      if (!Types.ObjectId.isValid(sessionId)) {
        throw new Error('Invalid session ID');
      }
  
      const updatedSession = await this.sessionModel.findByIdAndUpdate(
        sessionId,
        update,
        options,
      );
  
      return updatedSession;
    } catch (error) {
      console.error('Error updating session:', error);
      return null;
    }
  }
}
