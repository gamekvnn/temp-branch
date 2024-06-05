/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ThrottlerGuard } from '@nestjs/throttler';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ThrottlerBehindProxyGuard extends ThrottlerGuard {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected override getTracker(req: any): string {
    return req.headers?.['x-forwarded-for'] ? req.headers['x-forwarded-for'] : req.ip;
  }
}


