import type { INestApplication } from '@nestjs/common';
import helmet from 'helmet';

export function middleware(app: INestApplication): INestApplication {
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(helmet({ contentSecurityPolicy: isProduction ? undefined : false }));

  return app;
}
