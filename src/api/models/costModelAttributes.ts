/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
import type { CostId } from './CostId';
import type { Currencies } from './Currencies';
import type { PackageType } from './PackageType';
import type { Sizes } from './Sizes';
import type { TenantId } from './TenantId';
export type costModelAttributes = {
    id: CostId;
    tenantId: TenantId;
    branchId: BranchId;
    type: PackageType;
    typeId: number;
    modelV1: boolean;
    costPerKilometer: number;
    costPerKg: number;
    expressServiceFee: number;
    sameDayServiceFee: number;
    taxRate: number;
    cityBaseCosts: number;
    unit: string;
    currency: Currencies;
    maxLong: number;
    maxWidth?: number;
    weight: number;
    isDeleted: boolean;
    createdAt?: string;
    updatedAt?: string;
    size: Sizes;
};

