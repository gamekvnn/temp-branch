import { Injectable } from '@nestjs/common';

import { KeyValueDocument, KeyValueEntity } from './repositories/entities';
import { KeyValueRepository } from './repositories/key-value.repository';

@Injectable()
export class KeyValueService {
  constructor(
    private readonly keyValueRepository: KeyValueRepository,
  ) {}

  public async findById(id: string): Promise<KeyValueDocument | null> {
    return this.keyValueRepository.findOneById(id);
  }

  public async getValueByKey(key: string): Promise<KeyValueEntity | null> {
    return this.keyValueRepository.findOne({ key });
  }

  public async setValueByKey(key: string, value: string): Promise<boolean> {
    const keyValue = await this.getValueByKey(key);

    if (!keyValue) {
      await this.keyValueRepository.create({ key, value });
    }

    const updated = await this.keyValueRepository.keyValueModel.updateOne({ key }, { value });

    return updated.acknowledged;
  }
}
