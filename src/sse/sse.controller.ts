import { Controller, Sse } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { fromEvent, Observable } from 'rxjs';

import { EventNamesEnum } from '@/common/enums/event-names.enum';

@Controller('sse')
export class SSEController {
  constructor(private readonly emitter: EventEmitter2) {}

  @Sse('/')
  public proxy(): any {
    return <Observable<MessageEvent>>fromEvent(this.emitter, EventNamesEnum.DEPLOY_UPDATED);
  }
}
