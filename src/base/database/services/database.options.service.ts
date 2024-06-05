import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { IDatabaseOptionsService } from '@/base/database/interfaces/database.options-service.interface';
import { ConfigService } from '@/common';
import { AppEnvironmentEnum } from '@/common/enums/app-env.enum';
import { ConnectionNamesEnum } from '@/common/enums/connection-names.enum';

@Injectable()
export class DatabaseOptionsService implements IDatabaseOptionsService {
  constructor(private readonly configService: ConfigService) {}

  public createOptions(name: ConnectionNamesEnum = ConnectionNamesEnum.MONGODB): MongooseModuleOptions {
    const env = this.configService.get('env');
    const host = this.configService.get(`${name}.host`);
    const database = this.configService.get(`${name}.database`);
    const user = this.configService.get(`${name}.user`);
    const password = this.configService.get(`${name}.password`);
    const debug = this.configService.get(`${name}.debug`);

    const options = this.configService.get(`${name}.options`)
      ? `?${this.configService.get(`${name}.options`)}`
      : '';

    let uri = `${host}`;

    if (database) {
      uri = `${uri}/${database}${options}`;
    }

    if (env !== AppEnvironmentEnum.PRODUCTION) {
      mongoose.set('debug', !!debug);
    }

    const mongooseOptions: MongooseModuleOptions = {
      uri,
      serverSelectionTimeoutMS: 5000,
      autoCreate: false,
      autoIndex: false,
      // useMongoClient: true,
    };

    if (user && password) {
      mongooseOptions.auth = {
        username: user,
        password: password,
      };
    }

    return mongooseOptions;
  }
}
