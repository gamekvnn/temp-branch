import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { RouterModule as NestJsRouterModule } from '@nestjs/core';

import { RoutesTenantModule } from './routes/routes.tenant.module';
import { RoutesUserModule } from './routes/routes.user.module';

import { RoutesPublicModule } from '@/router/routes/routes.public.module';

@Module({})
export class RouterModule {
  public static forRoot(): DynamicModule {
    const imports: (
      | DynamicModule
      | Type
      | Promise<DynamicModule>
      | ForwardReference
    )[] = [];

    imports.push(
      RoutesPublicModule,
      RoutesTenantModule,
      RoutesUserModule,
      NestJsRouterModule.register([
        {
          path: '/',
          module: RoutesPublicModule,
        },
        {
          path: '/tenant-app',
          module: RoutesTenantModule,
        },
        {
          path: '/landlord-app',
          module: RoutesUserModule,
        },
      ]),
    );

    return {
      module: RouterModule,
      providers: [],
      exports: [],
      controllers: [],
      imports,
    };
  }
}
