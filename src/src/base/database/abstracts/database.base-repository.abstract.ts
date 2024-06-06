/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  IDatabaseCreateOptions,
  IDatabaseExistOptions,
  IDatabaseFindAllOptions,
  IDatabaseFindOneOptions,
  IDatabaseCreateManyOptions,
  IDatabaseManyOptions,
  IDatabaseSoftDeleteManyOptions,
  IDatabaseRestoreManyOptions,
  IDatabaseRawOptions,
  IDatabaseGetTotalOptions,
  IDatabaseSaveOptions,
} from '@/base/database/interfaces/database.interface';

export abstract class DatabaseBaseRepositoryAbstract<Entity> {
  public abstract findAll<T = Entity>(
    find?: Record<string, any>,
    options?: IDatabaseFindAllOptions
  ): Promise<T[]>;

  public abstract findAllDistinct<T = Entity>(
    fieldDistinct: string,
    find?: Record<string, any>,
    options?: IDatabaseFindAllOptions
  ): Promise<T[]>;

  public abstract findOne<T = Entity>(
    find: Record<string, any>,
    options?: IDatabaseFindOneOptions
  ): Promise<T>;

  public abstract findOneById<T = Entity>(
    _id: string,
    options?: IDatabaseFindOneOptions
  ): Promise<T>;

  public abstract findOneAndLock<T = Entity>(
    find: Record<string, any>,
    options?: IDatabaseFindOneOptions
  ): Promise<T>;

  public abstract findOneByIdAndLock<T = Entity>(
    _id: string,
    options?: IDatabaseFindOneOptions
  ): Promise<T>;

  public abstract getTotal(
    find?: Record<string, any>,
    options?: IDatabaseGetTotalOptions
  ): Promise<number>;

  public abstract exists(
    find: Record<string, any>,
    options?: IDatabaseExistOptions
  ): Promise<boolean>;

  public abstract create<Dto = any>(
    data: Dto,
    options?: IDatabaseCreateOptions
  ): Promise<Entity>;

  public abstract save(
    repository: Entity,
    options?: IDatabaseSaveOptions
  ): Promise<Entity>;

  public abstract delete(
    repository: Entity,
    options?: IDatabaseSaveOptions
  ): Promise<Entity>;

  public abstract softDelete(
    repository: Entity,
    options?: IDatabaseSaveOptions
  ): Promise<Entity>;

  public abstract restore(
    repository: Entity,
    options?: IDatabaseSaveOptions
  ): Promise<Entity>;

  public abstract createMany<Dto>(
    data: Dto[],
    options?: IDatabaseCreateManyOptions
  ): Promise<boolean>;

  public abstract deleteManyByIds(
    _id: string[],
    options?: IDatabaseManyOptions
  ): Promise<boolean>;

  public abstract deleteMany(
    find: Record<string, any>,
    options?: IDatabaseManyOptions
  ): Promise<boolean>;

  public abstract softDeleteManyByIds(
    _id: string[],
    options?: IDatabaseSoftDeleteManyOptions
  ): Promise<boolean>;

  public abstract softDeleteMany(
    find: Record<string, any>,
    options?: IDatabaseSoftDeleteManyOptions
  ): Promise<boolean>;

  public abstract restoreManyByIds(
    _id: string[],
    options?: IDatabaseRestoreManyOptions
  ): Promise<boolean>;

  public abstract restoreMany(
    find: Record<string, any>,
    options?: IDatabaseRestoreManyOptions
  ): Promise<boolean>;

  public abstract updateMany<Dto>(
    find: Record<string, any>,
    data: Dto,
    options?: IDatabaseManyOptions
  ): Promise<boolean>;

  public abstract raw<RawResponse, RawQuery = any>(
    rawOperation: RawQuery,
    options?: IDatabaseRawOptions
  ): Promise<RawResponse[]>;

  public abstract model(): Promise<any>;
}
