import { Injectable } from '@nestjs/common';


import { Logger } from '@/common';

@Injectable()
export class SchedulerService {
  constructor(
    private readonly logger: Logger,
  ) {
    this.logger.setContext(SchedulerService.name);
  }

  public run(): void {
    const jobs = [];
    if (jobs.length === 0) {
      this.logger.warn('No jobs found');
      return;
    }

    this.logger.log('--- Scheduler started ---');
  }

}
