import { Injectable } from '@nestjs/common';

import {
  PAGINATION_AVAILABLE_ORDER_BY,
  PAGINATION_MAX_PAGE,
  PAGINATION_MAX_PER_PAGE,
  PAGINATION_ORDER_BY,
  PAGINATION_ORDER_DIRECTION,
  PAGINATION_PAGE,
  PAGINATION_PER_PAGE,
} from '@/common/pagination/constants/pagination.constant';
import { IPaginationOrder } from '@/common/pagination/interfaces/pagination.interface';
import { IPaginationService } from '@/common/pagination/interfaces/pagination.service.interface';
import { PaginationDirectionTypesEnum } from '@/common/pagination/constants/pagination.enum.constant';

@Injectable()
export class PaginationService implements IPaginationService {
  public offset(pageValue: number, perPageValue: number): number {
    const page = pageValue > PAGINATION_MAX_PAGE ? PAGINATION_MAX_PAGE : pageValue;
    const perPage =
      perPageValue > PAGINATION_MAX_PER_PAGE
        ? PAGINATION_MAX_PER_PAGE
        : perPageValue;
    return (page - 1) * perPage;
  }

  public totalPage(totalData: number, perPage: number): number {
    let totalPage = Math.ceil(totalData / perPage);
    totalPage = totalPage === 0 ? 1 : totalPage;
    return totalPage > PAGINATION_MAX_PAGE
      ? PAGINATION_MAX_PAGE
      : totalPage;
  }

  public offsetWithoutMax(page: number, perPage: number): number {
    const offset: number = (page - 1) * perPage;
    return offset;
  }

  public totalPageWithoutMax(totalData: number, perPage: number): number {
    let totalPage = Math.ceil(totalData / perPage);
    totalPage = totalPage === 0 ? 1 : totalPage;
    return totalPage;
  }

  public page(page?: number): number {
    return page
      ? page > PAGINATION_MAX_PAGE
        ? PAGINATION_MAX_PAGE
        : page
      : PAGINATION_PAGE;
  }

  public perPage(perPage?: number): number {
    return perPage
      ? perPage > PAGINATION_MAX_PER_PAGE
        ? PAGINATION_MAX_PER_PAGE
        : perPage
      : PAGINATION_PER_PAGE;
  }

  public order(
    orderByValue: string = PAGINATION_ORDER_BY,
    orderDirectionValue: PaginationDirectionTypesEnum = PAGINATION_ORDER_DIRECTION,
    availableOrderBy: string[] = PAGINATION_AVAILABLE_ORDER_BY,
  ): IPaginationOrder {
    const orderBy: string = availableOrderBy.includes(orderByValue)
      ? orderByValue
      : PAGINATION_ORDER_BY;

    return { [orderBy]: orderDirectionValue };
  }

  public search(
    searchValue: string = '',
    availableSearch: string[] = [],
  ): Record<string, any> | undefined {
    if (!searchValue) {
      return undefined;
    }

    return {
      $or: availableSearch.map((val: string) => ({
        [val]: {
          $regex: new RegExp(searchValue),
          $options: 'i',
        },
      })),
    };
  }

  public filterEqual<T = string>(field: string, filterValue: T): Record<string, T> {
    return { [field]: filterValue };
  }

  public filterContain(
    field: string,
    filterValue: string,
  ): Record<string, { $regex: RegExp; $options: string }> {
    return {
      [field]: {
        $regex: new RegExp(filterValue),
        $options: 'i',
      },
    };
  }

  public filterContainFullMatch(
    field: string,
    filterValue: string,
  ): Record<string, { $regex: RegExp; $options: string }> {
    return {
      [field]: {
        $regex: new RegExp(`\\b${filterValue}\\b`),
        $options: 'i',
      },
    };
  }

  public filterIn<T = string>(
    field: string,
    filterValue: T[],
  ): Record<string, { $in: T[] }> {
    return {
      [field]: {
        $in: filterValue,
      },
    };
  }

  public filterDate(field: string, filterValue: Date): Record<string, Date> {
    return {
      [field]: filterValue,
    };
  }
}
