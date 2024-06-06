import {
  Logger as NestLogger,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { SeederModule } from './seeder/seeder.module';
import { SeederService } from './seeder/seeder.service';

import { Logger } from '@/common';

async function bootstrap(): Promise<string> {
  const app = await NestFactory.create<NestFastifyApplication>(
    SeederModule,
    new FastifyAdapter(),
  );

  app.useLogger(await app.resolve(Logger));

  const seederService = await app.resolve(SeederService);
  try {
    await seederService.run();
  } catch (error) {
    NestLogger.error(error, 'Seeder');
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
