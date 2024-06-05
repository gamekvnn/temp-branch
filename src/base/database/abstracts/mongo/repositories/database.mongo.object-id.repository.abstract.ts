/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import {
  ClientSession,
  Model,
  PipelineStage,
  PopulateOptions,
  Types,
  Document,
} from 'mongoose';

import { DatabaseBaseRepositoryAbstract } from '@/base/database/abstracts/database.base-repository.abstract';
import { DATABASE_DELETED_AT_FIELD_NAME } from '@/base/database/constants/database.constant';
import {
  IDatabaseCreateOptions,
  IDatabaseExistOptions,
  IDatabaseFindAllOptions,
  IDatabaseFindOneOptions,
  IDatabaseGetTotalOptions,
  IDatabaseManyOptions,
  IDatabaseSoftDeleteManyOptions,
  IDatabaseRestoreManyOptions,
  IDatabaseRawOptions,
  IDatabaseSaveOptions,
} from '@/base/database/interfaces/database.interface';

export abstract class DatabaseMongoObjectIdRepositoryAbstract<
    Entity,
    EntityDocument,
> extends DatabaseBaseRepositoryAbstract<EntityDocument> {
  protected _repository: Model<Entity>;
  protected _joinOnFind: PopulateOptions | PopulateOptions[];

  constructor(
    repository: Model<Entity>,
    options?: PopulateOptions | PopulateOptions[],
  ) {
    super();

    this._repository = repository;
    this._joinOnFind = options || [];
  }

  public async findAll<T = Entity>(
    find: Record<string, any> = {},
    options?: IDatabaseFindAllOptions<ClientSession>,
  ): Promise<T[]> {
    const findAll = this._repository.find<Entity>(find);

    if (options?.withDeleted) {
      void findAll.or([
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
        },
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
        },
      ]);
    } else {
      void findAll.where(DATABASE_DELETED_AT_FIELD_NAME).exists(false);
    }

    if (options?.select) {
      void findAll.select(options.select);
    }

    if (options?.paging) {
      void findAll.limit(options.paging.limit).skip(options.paging.offset);
    }

    if (options?.order) {
      void findAll.sort(options.order);
    }

    if (options?.join) {
      void findAll.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    if (options?.session) {
      void findAll.session(options.session);
    }

    return <T[]> <unknown>findAll.lean();
  }

  public async findAllDistinct<T = Entity>(
    fieldDistinct: string,
    find?: Record<string, any>,
    options?: IDatabaseFindAllOptions<ClientSession>,
  ): Promise<T[]> {
    const findAll = this._repository.distinct<string>(fieldDistinct, find);

    if (options?.withDeleted) {
      void findAll.or([
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
        },
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
        },
      ]);
    } else {
      void findAll.where(DATABASE_DELETED_AT_FIELD_NAME).exists(false);
    }

    if (options?.select) {
      void findAll.select(options.select);
    }

    if (options?.paging) {
      void findAll.limit(options.paging.limit).skip(options.paging.offset);
    }

    if (options?.order) {
      void findAll.sort(options.order);
    }

    if (options?.join) {
      void findAll.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    if (options?.session) {
      void findAll.session(options.session);
    }

    return findAll.lean();
  }

  public async findOne<T = EntityDocument>(
    find: Record<string, any>,
    options?: IDatabaseFindOneOptions<ClientSession>,
  ): Promise<T> {
    const findOne = this._repository.findOne<EntityDocument>(find);

    if (options?.withDeleted) {
      void findOne.or([
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
        },
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
        },
      ]);
    } else {
      void findOne.where(DATABASE_DELETED_AT_FIELD_NAME).exists(false);
    }

    if (options?.select) {
      void findOne.select(options.select);
    }

    if (options?.join) {
      void findOne.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    if (options?.session) {
      void findOne.session(options.session);
    }

    if (options?.order) {
      void findOne.sort(options.order);
    }

    return <T> <unknown> findOne.exec();
  }

  public async findOneById<T = EntityDocument>(
    _id: string,
    options?: IDatabaseFindOneOptions<ClientSession>,
  ): Promise<T> {
    const findOne = this._repository.findById<EntityDocument>(
      new Types.ObjectId(_id),
    );

    if (options?.withDeleted) {
      void findOne.or([
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
        },
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
        },
      ]);
    } else {
      void findOne.where(DATABASE_DELETED_AT_FIELD_NAME).exists(false);
    }

    if (options?.select) {
      void findOne.select(options.select);
    }

    if (options?.join) {
      void findOne.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    if (options?.session) {
      void findOne.session(options.session);
    }

    if (options?.order) {
      void findOne.sort(options.order);
    }

    return <T> <unknown> findOne.exec();
  }

  public async findOneAndLock<T = EntityDocument>(
    find: Record<string, any>,
    options?: IDatabaseFindOneOptions<ClientSession>,
  ): Promise<T> {
    const findOne = this._repository.findOneAndUpdate<EntityDocument>(
      find,
      {
        new: true,
        useFindAndModify: false,
      },
    );

    if (options?.withDeleted) {
      void findOne.or([
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
        },
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
        },
      ]);
    } else {
      void findOne.where(DATABASE_DELETED_AT_FIELD_NAME).exists(false);
    }

    if (options?.select) {
      void findOne.select(options.select);
    }

    if (options?.join) {
      void findOne.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    if (options?.session) {
      void findOne.session(options.session);
    }

    if (options?.order) {
      void findOne.sort(options.order);
    }

    return <T> <unknown> findOne.exec();
  }

  public async findOneByIdAndLock<T = EntityDocument>(
    _id: string,
    options?: IDatabaseFindOneOptions<ClientSession>,
  ): Promise<T> {
    const findOne = this._repository.findByIdAndUpdate(
      new Types.ObjectId(_id),
      {
        new: true,
        useFindAndModify: false,
      },
    );

    if (options?.withDeleted) {
      void findOne.or([
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
        },
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
        },
      ]);
    } else {
      void findOne.where(DATABASE_DELETED_AT_FIELD_NAME).exists(false);
    }

    if (options?.select) {
      void findOne.select(options.select);
    }

    if (options?.join) {
      void findOne.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    if (options?.session) {
      void findOne.session(options.session);
    }

    if (options?.order) {
      void findOne.sort(options.order);
    }

    return <T> <unknown> findOne.exec();
  }

  public async getTotal(
    find: Record<string, any> = {},
    options?: IDatabaseGetTotalOptions<ClientSession>,
  ): Promise<number> {
    const count = this._repository.countDocuments(find);

    if (options?.withDeleted) {
      void count.or([
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
        },
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
        },
      ]);
    } else {
      void count.where(DATABASE_DELETED_AT_FIELD_NAME).exists(false);
    }

    if (options?.session) {
      void count.session(options.session);
    }

    if (options?.join) {
      void count.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    return count;
  }

  public async exists(
    find: Record<string, any>,
    options?: IDatabaseExistOptions<ClientSession>,
  ): Promise<boolean> {
    if (options?.excludeId) {
      find = {
        ...find,
        _id: {
          $nin:
            options?.excludeId.map(
              (val: string) => new Types.ObjectId(val),
            ) ?? [],
        },
      };
    }

    const exist = this._repository.exists(find);
    if (options?.withDeleted) {
      void exist.or([
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
        },
        {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
        },
      ]);
    } else {
      void exist.where(DATABASE_DELETED_AT_FIELD_NAME).exists(false);
    }

    if (options?.session) {
      void exist.session(options.session);
    }

    if (options?.join) {
      void exist.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    const result = await exist;
    return result ? true : false;
  }

  public async create<Dto = any>(
    data: Dto,
    options?: IDatabaseCreateOptions<ClientSession>,
  ): Promise<EntityDocument> {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const dataCreate: Record<string, any> = data as Record<string, unknown>;

    if (options?._id) {
      dataCreate['_id'] = new Types.ObjectId(options?._id);
    }

    const created = await this._repository.create([dataCreate], {
      session: options ? options.session : undefined,
    });

    return <EntityDocument> <unknown> created[0];
  }

  public async save(
    repository: EntityDocument & Document<Types.ObjectId>,
    options?: IDatabaseSaveOptions,
  ): Promise<EntityDocument> {
    return repository.save(options);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async delete(
    repository: EntityDocument & Document<Types.ObjectId>,
    options?: IDatabaseSaveOptions,
  ): Promise<EntityDocument> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return repository.deleteOne(options);
  }

  public async softDelete(
    repository: EntityDocument &
    Document<Types.ObjectId> & { deletedAt?: Date },
    options?: IDatabaseSaveOptions,
  ): Promise<EntityDocument> {
    repository.deletedAt = new Date();
    return repository.save(options);
  }

  public async restore(
    repository: EntityDocument &
    Document<Types.ObjectId> & { deletedAt?: Date },
    options?: IDatabaseSaveOptions,
  ): Promise<EntityDocument> {
    repository.deletedAt = undefined;
    return repository.save(options);
  }

  public async deleteManyByIds(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _id: string[],
    options?: IDatabaseManyOptions<ClientSession>,
  ): Promise<boolean> {
    const del = this._repository.deleteMany({
      _id: {
        $in: _id.map((val: string) => new Types.ObjectId(val)),
      },
    });

    if (options?.session) {
      void del.session(options.session);
    }

    if (options?.join) {
      void del.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    // eslint-disable-next-line no-useless-catch
    try {
      await del;
      return true;
    } catch (err: unknown) {
      throw err;
    }
  }

  public async deleteMany(
    find: Record<string, any>,
    options?: IDatabaseManyOptions<ClientSession>,
  ): Promise<boolean> {
    const del = this._repository.deleteMany(find);

    if (options?.session) {
      void del.session(options.session);
    }

    if (options?.join) {
      void del.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    // eslint-disable-next-line no-useless-catch
    try {
      await del;
      return true;
    } catch (err: unknown) {
      throw err;
    }
  }

  public async softDeleteManyByIds(
    _id: string[],
    options?: IDatabaseSoftDeleteManyOptions<ClientSession>,
  ): Promise<boolean> {
    const softDel = this._repository
      .updateMany(
        {
          _id: {
            $in: _id.map((val: string) => new Types.ObjectId(val)),
          },
        },
        {
          $set: {
            deletedAt: new Date(),
          },
        },
      )
      .where(DATABASE_DELETED_AT_FIELD_NAME)
      .exists(false);

    if (options?.session) {
      void softDel.session(options.session);
    }

    if (options?.join) {
      void softDel.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    // eslint-disable-next-line no-useless-catch
    try {
      await softDel;
      return true;
    } catch (err: unknown) {
      throw err;
    }
  }

  public async softDeleteMany(
    find: Record<string, any>,
    options?: IDatabaseSoftDeleteManyOptions<ClientSession>,
  ): Promise<boolean> {
    const softDel = this._repository
      .updateMany(find, {
        $set: {
          deletedAt: new Date(),
        },
      })
      .where(DATABASE_DELETED_AT_FIELD_NAME)
      .exists(false);

    if (options?.session) {
      void softDel.session(options.session);
    }

    if (options?.join) {
      void softDel.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    // eslint-disable-next-line no-useless-catch
    try {
      await softDel;
      return true;
    } catch (err: unknown) {
      throw err;
    }
  }

  public async restoreManyByIds(
    _id: string[],
    options?: IDatabaseRestoreManyOptions<ClientSession>,
  ): Promise<boolean> {
    const rest = this._repository
      .updateMany(
        {
          _id: {
            $in: _id.map((val: string) => new Types.ObjectId(val)),
          },
        },
        {
          $set: {
            deletedAt: undefined,
          },
        },
      )
      .where(DATABASE_DELETED_AT_FIELD_NAME)
      .exists(true);

    if (options?.session) {
      void rest.session(options.session);
    }

    if (options?.join) {
      void rest.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    // eslint-disable-next-line no-useless-catch
    try {
      await rest;
      return true;
    } catch (err: unknown) {
      throw err;
    }
  }

  public async restoreMany(
    find: Record<string, any>,
    options?: IDatabaseRestoreManyOptions<ClientSession>,
  ): Promise<boolean> {
    const rest = this._repository
      .updateMany(find, {
        $set: {
          deletedAt: undefined,
        },
      })
      .where(DATABASE_DELETED_AT_FIELD_NAME)
      .exists(true);

    if (options?.session) {
      void rest.session(options.session);
    }

    if (options?.join) {
      void rest.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    // eslint-disable-next-line no-useless-catch
    try {
      await rest;
      return true;
    } catch (err: unknown) {
      throw err;
    }
  }

  public async updateMany<Dto>(
    find: Record<string, any>,
    data: Dto,
    options?: IDatabaseManyOptions<ClientSession>,
  ): Promise<boolean> {
    const update = this._repository
      .updateMany(find, {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        $set: data as AnyObject,
      })
      .where(DATABASE_DELETED_AT_FIELD_NAME)
      .exists(false);

    if (options?.session) {
      void update.session(options.session );
    }

    if (options?.join) {
      void update.populate(
        typeof options.join === 'boolean'
          ? this._joinOnFind
          : (options.join ),
      );
    }

    // eslint-disable-next-line no-useless-catch
    try {
      await update;
      return true;
    } catch (err: unknown) {
      throw err;
    }
  }

  // raw
  public async raw<RawResponse, RawQuery = PipelineStage[]>(
    rawOperation: RawQuery,
    options?: IDatabaseRawOptions,
  ): Promise<RawResponse[]> {
    if (!Array.isArray(rawOperation)) {
      throw new Error('Must in array');
    }

    const pipeline: PipelineStage[] = rawOperation;

    if (options?.withDeleted) {
      pipeline.push({
        $match: {
          $or: [
            {
              [DATABASE_DELETED_AT_FIELD_NAME]: {
                $exists: false,
              },
            },
            {
              [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
            },
          ],
        },
      });
    } else {
      pipeline.push({
        $match: {
          [DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
        },
      });
    }

    const aggregate = this._repository.aggregate<RawResponse>(pipeline);

    if (options?.session) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      void aggregate.session(options?.session);
    }

    return aggregate;
  }

  public async model(): Promise<Model<Entity>> {
    return this._repository;
  }
}
