import {
  Controller, Get,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AppConfigPresenter } from './app-config.presenter';

import { ConfigService } from '@/common';

@ApiTags('modules.public.app-config')
@Controller({
  version: '1',
  path: '/app-config',
})
export class AppConfigPublicController {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  @Get('/')
  public getConfig(): AppConfigPresenter {
    return {
      version: this.configService.get('app.version'),
    };
  }
}
