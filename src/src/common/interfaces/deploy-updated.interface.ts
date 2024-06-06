import { DeployStatusEnum } from '@/common';

export class DeployUpdated {
  public deployHash!: string;
  public status!: DeployStatusEnum;

  constructor(init?: Partial<DeployUpdated>) {
    Object.assign(this, init);
  }
}
