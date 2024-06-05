import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  HealthIndicatorResult,
  HttpHealthIndicator,
} from '@nestjs/terminus';
import { Public } from 'src/common';

/**
 * https://docs.nestjs.com/recipes/terminus
 */
@ApiTags('health')
@Controller({
  path: 'health',
  version: VERSION_NEUTRAL,
})
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    // private redis: RedisHealthIndicator,
  ) {}

  @Public()
  @Get()
  @HealthCheck()
  public async check(): Promise<HealthCheckResult> {
    const result = await this.health.check([
      async (): Promise<HealthIndicatorResult> =>
        this.http.pingCheck('dns', 'https://1.1.1.1'),
      // async (): Promise<HealthIndicatorResult> => this.redis.isHealthy('redis'),
      // async (): Promise<HealthIndicatorResult> => this.db.pingCheck('database'),
    ]);

    return  result;
  }
}
