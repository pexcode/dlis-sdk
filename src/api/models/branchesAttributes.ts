/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
import type { costModelAttributes } from './costModelAttributes';
import type { TenantId } from './TenantId';
import type { UserId } from './UserId';
export type branchesAttributes = {
    costModel?: Array<costModelAttributes> | null;
    id: BranchId;
    userId: UserId;
    tenantId: TenantId;
    cityId: number;
    'R': number;
    onlyInternal: boolean;
    availableOnlinePayment: boolean;
    isOnlyEndpoint: boolean;
    isDeleted: boolean;
    workHours: string;
    plz?: number;
    address: string;
    name: string;
    avatar?: string;
    phone?: string;
    rank?: number;
    lat?: number;
    lng?: number;
    createdAt?: string;
    updatedAt?: string;
    isActive: boolean;
};

