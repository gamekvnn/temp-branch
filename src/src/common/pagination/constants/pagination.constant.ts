import { PaginationDirectionTypesEnum } from '@/common/pagination/constants/pagination.enum.constant';

export const PAGINATION_PER_PAGE = 20;
export const PAGINATION_MAX_PER_PAGE = 100;
export const PAGINATION_PAGE = 1;
export const PAGINATION_MAX_PAGE = 20;
export const PAGINATION_ORDER_BY = 'createdAt';
export const PAGINATION_ORDER_DIRECTION: PaginationDirectionTypesEnum =
    PaginationDirectionTypesEnum.ASC;
export const PAGINATION_AVAILABLE_ORDER_BY: string[] = ['createdAt'];
export const PAGINATION_AVAILABLE_ORDER_DIRECTION: PaginationDirectionTypesEnum[] =
    Object.values(PaginationDirectionTypesEnum);
