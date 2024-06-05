/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  InjectConnection,
  InjectModel,
  Schema,
  SchemaOptions,
} from '@nestjs/mongoose';

import {
  DATABASE_CREATED_AT_FIELD_NAME,
  DATABASE_UPDATED_AT_FIELD_NAME,
} from '@/base/database/constants/database.constant';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function DatabaseConnection(
  connectionName?: string,
) {
  return InjectConnection(connectionName);
}

export function DatabaseModel(
  entity: string,
  connectionName?: string,
) {
  return InjectModel(entity, connectionName);
}

export function DatabaseEntity(options?: SchemaOptions): ClassDecorator {
  return Schema({
    ...options,
    versionKey: false,
    timestamps: {
      createdAt: DATABASE_CREATED_AT_FIELD_NAME,
      updatedAt: DATABASE_UPDATED_AT_FIELD_NAME,
    },
  });
}
