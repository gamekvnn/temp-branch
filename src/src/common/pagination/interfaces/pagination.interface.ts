import {
  PaginationFilterCaseOptionsEnum,
  PaginationFilterDateTimeOptionsEnum,
  PaginationDirectionTypesEnum,
} from '@/common/pagination/constants/pagination.enum.constant';

export type IPaginationOrder = Record<
string,
PaginationDirectionTypesEnum
>;

export interface IPaginationPaging {
  limit: number;
  offset: number;
}

export interface IPaginationOptions {
  paging?: IPaginationPaging;
  order?: IPaginationOrder;
}

export interface IPaginationFilterDateOptions {
  time?: PaginationFilterDateTimeOptionsEnum;
}

export interface IPaginationFilterStringContainOptions {
  case?: PaginationFilterCaseOptionsEnum;
  trim?: boolean;
  fullMatch?: boolean;
}

export interface IPaginationFilterStringEqualOptions
  extends IPaginationFilterStringContainOptions {
  isNumber?: boolean;
}
