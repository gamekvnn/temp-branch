import { DeployStatusEnum } from '../enums';

export interface DeployStatus {
  hash: string;
  status: DeployStatusEnum;
}
