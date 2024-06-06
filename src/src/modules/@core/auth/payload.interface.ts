import { UserTypesEnum } from './enums/user-types.enum';

export interface Payload {
  type: UserTypesEnum;
  userId: string;
}
