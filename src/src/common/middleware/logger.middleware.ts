import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Response } from 'express';
import { nanoid } from 'nanoid';
import { RequestUser } from 'typings/request';

import { Logger } from '../providers';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private passUrl: string[] = ['/health', '/graphql', '/stream/wallets'];
  // GraphQL logging uses the apollo plugins.
  // https://docs.nestjs.com/graphql/plugins
  // https://www.apollographql.com/docs/apollo-server/integrations/plugins/
  // https://github.com/nestjs/graphql/issues/923

  constructor(private readonly logger: Logger) {}

  public use(req: RequestUser, res: Response, next: () => void): void {
    if (this.passUrl.includes(req.originalUrl)) {
      return next();
    }

    req.id = <string>req.headers['X-Request-Id'] || nanoid();
    res.setHeader('X-Request-Id', req.id);

    const user = req.user?.userId || '';
    const ip = req.headers?.['x-forwarded-for'] ? <string>req.headers['x-forwarded-for'] : <string>req.ip;
    this.logger.log(`${req.method} ${req.originalUrl} - ${ip?.replace('::ffff:', '')} ${user}`);

    return next();
  }
}
