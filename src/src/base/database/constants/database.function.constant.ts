import { Types } from 'mongoose';
import { nanoid } from 'nanoid';

export const DatabaseDefaultUUID = nanoid;

export const DatabaseDefaultObjectId = (): Types.ObjectId => new Types.ObjectId();
