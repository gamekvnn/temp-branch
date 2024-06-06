import { CronExpression } from '@nestjs/schedule';

export const config = {
  port: process.env.PORT || 4000,
  env: 'development',

  cronJobTime: {
    cheaterChecker: process.env.CRON_JOB_TIME_CHEATER_CHECKER || CronExpression.EVERY_30_MINUTES,
  },
};
