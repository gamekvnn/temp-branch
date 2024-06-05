import {
  DATABASE_CREATED_AT_FIELD_NAME,
  DATABASE_DELETED_AT_FIELD_NAME,
  DATABASE_UPDATED_AT_FIELD_NAME,
} from '@/base/database/constants/database.constant';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export abstract class DatabaseBaseEntityAbstract<T = any> {
  public abstract _id: T;
  public abstract [DATABASE_DELETED_AT_FIELD_NAME]?: Date;
  public abstract [DATABASE_CREATED_AT_FIELD_NAME]?: Date;
  public abstract [DATABASE_UPDATED_AT_FIELD_NAME]?: Date;
}
