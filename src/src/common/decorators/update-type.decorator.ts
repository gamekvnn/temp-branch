/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TelegrafExecutionContext } from 'nestjs-telegraf';

export const UpdateType = createParamDecorator(
  (_: any, ctx: ExecutionContext) =>
    TelegrafExecutionContext.create(ctx).getContext().updateType,
);
