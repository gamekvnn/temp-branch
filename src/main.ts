import {
  Logger as NestLogger,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { SchedulerService } from './scheduler/scheduler.service';

import { middleware } from '@/app.middleware';
import { AppModule } from '@/app.module';
import { Logger } from '@/common';

async function bootstrap(): Promise<string> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.useBodyParser('json', {
    bodyLimit: 10_485_760,
  });

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.useLogger(await app.resolve(Logger));
  // https://docs.nestjs.com/techniques/validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // transform object to DTO class
      whitelist: true,
    }),
  );

  middleware(app);

  const schedulerService = await app.resolve(SchedulerService);
  try {
    schedulerService.run();
  } catch (error) {
    NestLogger.error(error, 'Scheduler');
  }

  const options = new DocumentBuilder()
    .setTitle('API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.PORT || 4001, '0.0.0.0');

  return app.getUrl();
}

(async (): Promise<void> => {
  try {
    const url = await bootstrap();
    NestLogger.log(url, 'Bootstrap');
  } catch (error) {
    NestLogger.error(error, 'Bootstrap');
  }
})();
