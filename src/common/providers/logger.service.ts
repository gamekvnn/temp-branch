import {
  ConsoleLogger,
  ConsoleLoggerOptions,
  Injectable,
  Scope,
} from '@nestjs/common';

import { RequestContext } from './request-context.service';

/**
 * https://docs.nestjs.com/techniques/logger
 * To disable color in the default logger's messages, set the `NO_COLOR` environment variable to some non-empty string.
 */
@Injectable({ scope: Scope.TRANSIENT })
export class Logger extends ConsoleLogger {
  protected isProduction: boolean = process.env.NODE_ENV === 'production';
  protected override options: ConsoleLoggerOptions = {
    logLevels: ['log', 'error', 'warn', 'debug', 'verbose'],
    timestamp: !this.isProduction,
  };

  constructor(private req: RequestContext, context: string) {
    super(context);
  }

  private get reqContext(): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.req.context?.id || '';
  }

  public override log(message: unknown, ...optionalParams: unknown[]): void {
    super.log(message, ...this.parseContext(optionalParams));
  }

  public override warn(message: unknown, ...optionalParams: unknown[]): void {
    super.warn(message, ...this.parseContext(optionalParams));
  }

  public override error(message: unknown, ...optionalParams: unknown[]): void {
    let textMessage = message;
    if (message instanceof Error) {
      textMessage = message.stack;
    } else {
      console.log(message);
    }
    super.error(textMessage, ...this.parseContext(optionalParams));
  }

  protected override getTimestamp(): string {
    // When you want to change or remove the date format
    // return this.isProduction ? '' : super.getTimestamp();
    return super.getTimestamp();
  }

  private parseContext(params: unknown[]): unknown[] {
    if (this.reqContext) {
      let context = this.reqContext;

      if (this.context) {
        context += `] [${this.context}`;
      }

      params.push(context);
    }

    return params;
  }
}
